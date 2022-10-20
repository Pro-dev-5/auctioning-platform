Rails.application.routes.draw do
  
	namespace :api do
  	resources :categories, only: [:index]
  	resources :sellers, only: [:index, :show]
  	resources :products, only: [:index, :show]
		resources :buyers, only: [:index]
  	resources :bids, only: [:index]
		post '/sellersignup', to: 'sellers#create'
		# get '/me', to: 'users#show'
		post '/sellerlogin', to: 'sessions#seller_create'
		delete '/sellerlogout', to: 'sessions#seller_destroy'
		# get '/auth', to: 'auth#authorize'
	end
end
