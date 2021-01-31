Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do

      post '/signup', to: 'users#signup'

      post '/login', to: 'sessions#login'
      delete '/logout', to: 'sessions#logout'
      get '/logged_in', to: 'sessions#logged_in?'

    end
  end
end
