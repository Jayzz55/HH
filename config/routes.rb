Rails.application.routes.draw do

  resources :bars    #, only: [:show, :index, :new, :create] todo JLW limit if necessary

  get '/' => 'pages#new', :as => :root
  # get '/bars/index' => 'bars#index'

  namespace :api do 
    resources :bars, only: [:index, :show]
  end
end
