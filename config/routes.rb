Rails.application.routes.draw do
  resources :contact_messages, only: [:index, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root 'static#home'

  controller :sessions do 
    get  'login'  => :new
    post 'login'  => :create
    get  'logout' => :logout
  end

  get '/:url' => 'static#show'
end
