module ApplicationHelper
  def small_image(bar)
    bar.sml_img == "https://www.thehappiesthour.com" ? image_path('example-small.jpg') : bar.sml_img
  end

  def large_image(bar)
    bar.lrg_img == "https://www.thehappiesthour.com" ? image_path("example-bar.jpg", :alt => "bar/pub") : bar.lrg_img
  end
end
