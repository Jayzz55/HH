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
  
end
