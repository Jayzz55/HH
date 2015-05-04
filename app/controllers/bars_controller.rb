class BarsController < ApplicationController

  def index
    @bars = Bar.all
  end

  def show
    @bar = Bar.find(params[:id])
  end

  def new
    @bar = Bar.new
  end

  def edit
    @bar = Bar.find(params[:id])
  end

  def create
    @bar = Bar.new(bar_params)

    if @bar.save
      redirect_to '/'
    else
      render :new
    end
  end

  def update
    @bar = Bar.find(params[:id])
    if @bar.update(bar_params)
      redirect_to '/'
    else
      render :edit
    end
  end

  def destroy
    @bar = Bar.find(params[:id])
    @bar.destroy
    redirect_to '/'
  end

  def bar_params
    params.require(:bar).permit(:name, :street_number, :street_name, :street_identifier, :suburb, :state, :postcode, :country, :website, :telephone, :review => [])
  end

end
