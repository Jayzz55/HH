class BarsController < ApplicationController

  def index
    @bars = Bar.where(suburb: params[:location])
    days_boolean = Special.days_boolean(params[:day])
    @bars = Bar.where(id: Special.where(monday: days_boolean[0], tuesday: days_boolean[1], wednesday: days_boolean[2], thursday: days_boolean[3], friday: days_boolean[4], saturday: days_boolean[5], sunday: days_boolean[6]).pluck(:bar_id))
  end

  def show
    @bar = Bar.find(params[:id])
    @address_for_geocoding = [@bar.address, @bar.suburb, @bar.state, @bar.postcode].join(' ').squeeze(' ')
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
