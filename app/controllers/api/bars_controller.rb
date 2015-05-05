class Api::BarsController < ApiController

  def index
    bars = Bar.all
    render json: bars, status: :ok, root: false
  end

  def show
    bar = Bar.find(params[:id])
    render json: bar, status: :ok, root: false
  end


  private

  def bar_params
    params.require(:bar).permit(:name, :address, :suburb, :state, :postcode, :contact_1, :contact_2, :contact_3, :review)
  end

end
