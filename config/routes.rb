Rails.application.routes.draw do
  
	namespace :api do
  	resources :categories, only: [:index]
  	resources :sellers, only: [:index, :show]
  	resources :products, only: [:index, :show]
		resources :buyers, only: [:index]
  	resources :bids, only: [:index]
		post '/sellersignup', to: 'sellers#create'
		post '/buyersignup', to: 'buyers#create'
		# get '/me', to: 'users#show'
		post '/sellerlogin', to: 'sessions#seller_create'
		delete '/sellerlogout', to: 'sessions#seller_destroy'
		post '/buyerlogin', to: 'sessions#buyer_create'
		delete '/buyerlogout', to: 'sessions#buyer_destroy'
		# get '/auth', to: 'auth#authorize'
	end

	# root 'fallback#index'
	get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
