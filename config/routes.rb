Rails.application.routes.draw do

	namespace :api do
		resources :categories, only: [:index, :show]
		resources :users, only: [:create, :show]
		resources :bids, only: [:index, :create]
		resources :products, only: [:index, :show, :create, :update, :destroy]
		get '/buyers', to: 'users#buyer'
		get '/sellers', to: 'users#seller'
		post '/login', to: 'sessions#create'
		delete '/logout', to: 'sessions#destroy'
		get '/me', to: 'users#me'
		post '/signup', to: 'users#create'
		get '/auth', to: "auth#authorize"
	end

	get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
