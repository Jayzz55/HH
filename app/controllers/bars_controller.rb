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
    params.require(:bar).permit(:name, :address, :suburb, :state, :postcode, :contact_1, :contact_2, :contact_3, :review)
  end

end
