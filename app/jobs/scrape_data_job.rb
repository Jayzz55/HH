require 'nokogiri'
require 'open-uri'

class ScrapeDataJob < ActiveJob::Base
  queue_as :default

  def perform()
    bars_list_link = []
    # Bars index
    url = "https://www.thehappiesthour.com/venues/melbourne/?page=1"
    page = Nokogiri::HTML(open(url))   

    # number of pagination
    last_page = page.css('.pagination li').length - 2

    (1..last_page).each do |index|
      url = "https://www.thehappiesthour.com/venues/melbourne/?page=#{index}"
      page = Nokogiri::HTML(open(url))

      # set result page
      data_table =  page.css("table.table-venue tr")
      # remove table head
      data_table.shift
      # loop through each row to get bar data link
      data_table.map do |row|
        link = URI.escape(row.css(".text-center strong a").first.attr('href'))
        bars_list_link.push("https://www.thehappiesthour.com#{link}")
      end
    end

    # loop through bars_list_link to scarpe details of the bar
    bars_list_link.each do |url|
      # Bar details
      ## Bar contact details
      page = Nokogiri::HTML(open(url))   
      puts name =  page.css(".vcard li")[0].text
      address =  page.css(".vcard li")[1].text
      suburb =  page.css(".vcard li")[2].text
      state = page.css(".vcard li").css('li')[3].css('span')[0].text.gsub("\n",'').strip
      postcode = page.css(".vcard li").css('li')[3].css('a').first.text.to_i
      contact_1 = page.css(".vcard li")[5].text if page.css(".vcard li")[5] && page.css(".vcard li")[5].text.length < 300
      contact_2 = page.css(".vcard li")[6].text if page.css(".vcard li")[6] && page.css(".vcard li")[6].text.length < 300
      contact_3 = page.css(".vcard li")[7].text if page.css(".vcard li")[7] && page.css(".vcard li")[7].text.length < 300
      review = page.css('h1.size-72')[0].text

      bar = Bar.create(name: name, address: address, suburb: suburb, state: state, postcode: postcode, contact_1: contact_1, contact_2: contact_2, contact_3: contact_3, review: review)

      ## Bar special details
      data_table =  page.css("table.table-venue tr")
      ##remove table head
      data_table.shift
      data_table.each do |row|
        puts special_details = row.css('td')[2].text
        rating = row.css('td')[3].css('.font-orange').length
        days_array = row.css('td')[0].text.split(' ')
        monday = (days_array.include? 'Mon') || (days_array.include? 'All')
        tuesday = (days_array.include? 'Tue') || (days_array.include? 'All')
        wednesday = (days_array.include? 'Wed') || (days_array.include? 'All')
        thursday = (days_array.include? 'Thu') || (days_array.include? 'All')
        friday = (days_array.include? 'Fri') || (days_array.include? 'All')
        saturday = (days_array.include? 'Sat') || (days_array.include? 'All')
        sunday = (days_array.include? 'Sun') || (days_array.include? 'All')
        specials_duration = row.css('td')[1].text.split('-')
        puts specials_duration.length
        if (specials_duration.length > 1 && specials_duration.first.size > 1 && !(specials_duration.first.include? ':') )
          start_time = specials_duration.first.insert(2,':') 
        elsif specials_duration.first
          start_time = specials_duration.first
        end
        puts start_time = start_time.to_time if start_time

        if (specials_duration.length > 1 && specials_duration.last.size > 1 && !(specials_duration.last.include? ':'))
          end_time = specials_duration.last.insert(2,':') 
        elsif specials_duration.last
          end_time = specials_duration.last
        end
        puts end_time = end_time.to_time if end_time


        bar.specials.create(special_details: special_details, rating: rating, start_time: start_time, end_time: end_time, monday: monday, tuesday: tuesday, wednesday: wednesday, thursday: thursday, friday: friday, saturday: saturday, sunday: sunday)
      end
    end

  end
end