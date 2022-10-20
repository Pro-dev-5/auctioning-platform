class Api::SessionsController < ApplicationController

	def seller_create
		seller = Seller.find_by(name: params[:name])
		if seller&.authenticate(params[:password])
			session[:seller_id] = seller.id
			render json: seller, status: :created
		else
			render json: {errors: ["Invalid username or password"]}, status: :unauthorized
		end
	end

	def seller_destroy
		session.delete :seller_id
		head :no_content
	end
end
