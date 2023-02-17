Rails.application.routes.draw do
  resources :game_collections
  resources :games
  resources :users
  post '/signup', to: 'users#create'
  get "/me", to: "users#show"
  post "/signin", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"

end
