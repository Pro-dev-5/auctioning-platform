class Api::BuyersController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_buyer_not_found
	def create
		buyer = Buyer.create!(buyer_params)
		if buyer.valid?
			session[:buyer_id] = buyer.id
			render json: buyer, status: :created
		else
			render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
		end
	end

	def index
		render json: Buyer.all, status: :ok
	end

	def show
		buy = Buyer.find(params[:id])
		render json: cat, status: :ok
	end

	private

	def buyer_params
		params.permit(:name, :email, :password, :password_confirmation)
	end

	def render_buyer_not_found
		render json: {errors: ["Buyer not found"]}, status: :not_found
	end
end
