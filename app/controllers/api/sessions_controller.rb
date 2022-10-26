class Api::SessionsController < ApplicationController

	def seller_create
		seller = Seller.find_by(name: params[:name])
		if seller&.authenticate(params[:password])
			session[:seller_id] = seller.id
			byebug
			render json: seller, status: :created
		else
			render json: {errors: ["Invalid username or password"]}, status: :unauthorized
		end
	end

	def buyer_create
		buyer = Buyer.find_by(name: params[:name])
		if buyer&.authenticate(params[:password])
			session[:buyer_id] = buyer.id
			render json: buyer, status: :created
		else
			render json: {errors: ["Invalid username or password"]}, status: :unauthorized
		end
	end

	def seller_destroy
		session.delete :seller_id
		head :no_content
	end

	def buyer_destroy
		session.delete :buyer_id
		head :no_content
	end
end
