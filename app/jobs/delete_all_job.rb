class DeleteAllJob < ActiveJob::Base
  queue_as :default

  def perform()
    Bar.destroy_all
  end
end