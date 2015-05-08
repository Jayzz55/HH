class Special < ActiveRecord::Base
  belongs_to :bar

  def self.days_boolean(input)
    case input
    when "Mon"
      [true, false, false, false, false, false ,false]
    when "Tue"
      [false, true, false, false, false, false ,false]
    when "Wed"
      [false, false, true, false, false, false ,false]
    when "Thu"
      [false, false, false, true, false, false ,false]
    when "Fri"
      [false, false, false, false, true, false ,false]
    when "Sat"
      [false, false, false, false, false, true ,false]
    when "Sun"
      [false, false, false, false, false, false ,true]
    else
      [true, true, true, true, true, true ,true]
    end
  end

  def days_convert
    monday = self.monday ? 'Mon' : ''
    tuesday = self.tuesday ? 'Tue' : ''
    wednesday = self.wednesday ? 'Wed' : ''
    thursday = self.thursday ? 'Thu' : ''
    friday = self.friday ? 'Fri' : ''
    saturday = self.saturday ? 'Sat' : ''
    sunday = self.sunday ? 'Sun' : ''

    days_array = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
    result = days_array.select{|day| day != ''}
    result.join(', ')  
  end

  def duration
    if (self.start_time && self.end_time)
      "#{self.start_time_24hrs} : #{self.end_time_24hrs}"
    elsif (!self.start_time && self.end_time)
      "Until #{self.end_time_24hrs}"
    elsif (self.start_time && !self.end_time)
    "From #{self.start_time_24hrs}"
    end
  end

  def start_time_24hrs
    self.start_time.to_time.strftime("%R") if self.start_time
  end

  def end_time_24hrs
    self.end_time.to_time.strftime("%R") if self.end_time
  end
  
end
