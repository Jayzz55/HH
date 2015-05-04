Rails.application.routes.draw do

  resources :bars    #, only: [:show, :index, :new, :create] todo JLW limit if necessary

  get '/' => 'bars#index', :as => :root

  namespace :api do 
    resources :bars, only: [:index, :show]
  end
end
