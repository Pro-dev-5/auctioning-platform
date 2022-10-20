Rails.application.routes.draw do
  resources :buyers
  resources :bids
	namespace :api do
  	resources :categories, only: [:index]
  	resources :sellers, only: [:index, :show]
  	resources :products, only: [:index, :show]

		post '/sellersignup', to: 'sellers#create'
		# get '/me', to: 'users#show'
		post '/sellerlogin', to: 'sessions#seller_create'
		delete '/sellerlogout', to: 'sessions#seller_destroy'
		# get '/auth', to: 'auth#authorize'
	end
end
