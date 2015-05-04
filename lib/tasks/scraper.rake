namespace :scraper do

  desc "Destroy all data"
  task delete_all: :environment do
    require './app/jobs/delete_all_job.rb'

    DeleteAllJob.perform_later
  end

  desc "scrape data"
  task scrape_data: :environment do
    require './app/jobs/scrape_data_job.rb'

    ScrapeDataJob.perform_later

  end

end
