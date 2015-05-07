class PagesController < ApplicationController

  def index
    @bars_location = Bar.pluck(:suburb).uniq
    @specials_day = %w(Mon Tue Wed Thu Fri Sat Sun Everyday)
    time = Time.new
    @today_day = time.strftime("%a")
  end
end