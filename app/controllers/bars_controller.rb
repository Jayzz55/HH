class BarsController < ApplicationController

  def index
    @bars = Bar.where(suburb: params[:location])
    days_boolean = Special.days_boolean(params[:day])
    if params[:day] == 'Everyday'
      @specials = Special.where(monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: true, sunday: true)
    else
      t = Special.arel_table
      @specials = Special.where((t[:monday].eq(days_boolean[0]).and(t[:tuesday].eq(days_boolean[1])).and(t[:wednesday].eq(days_boolean[2])).and(t[:thursday].eq(days_boolean[3])).and(t[:friday].eq(days_boolean[4])).and(t[:saturday].eq(days_boolean[5])).and(t[:sunday].eq(days_boolean[6])).or(t[:monday].eq(true).and(t[:tuesday].eq(true)).and(t[:wednesday].eq(true)).and(t[:thursday].eq(true)).and(t[:friday].eq(true)).and(t[:saturday].eq(true)).and(t[:sunday].eq(true)) ) ))

    end
    @bars = Bar.where(id: @specials.pluck(:bar_id))

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
