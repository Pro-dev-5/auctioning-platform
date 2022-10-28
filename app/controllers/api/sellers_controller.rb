class Api::SellersController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_seller_not_found
	def create
		seller = Seller.create!(seller_params)
		if seller.valid?
			session[:seller_id] = seller.id
			render json: seller, status: :created
		else
			render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
		end
	end

	def index
		sel = Seller.all.includes(:products)
		render json: sel, status: :ok
	end

	def show
		seller = Seller.find(session[:seller_id])
		render json: seller, status: :ok
	end

	private

	def seller_params
		params.permit(:name, :email, :password, :password_confirmation)
	end

	def render_seller_not_found
		render json: {errors: ["Seller not found"]}, status: :not_found
	end
end