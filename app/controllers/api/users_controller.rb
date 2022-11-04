class Api::UsersController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_user_not_found
	skip_before_action :authorized_as_seller, only: [:index, :create, :me, :show, :buyer, :seller, :show_buyer]
	skip_before_action :authenticated_user, only: [:index, :show, :create, :me, :buyer, :seller]
	def create
		user = User.create!(user_params)
		if user.valid?
			session[:user_id] = user.id
			render json: user, status: 201
		else
			render json: {errors: user.errors.full_messages}, status: 422
		end
	end

	def me
		user = User.find(session[:user_id])
		render json: user, status: 200
	end

	def show
		user = User.find(params[:id])
		render json: user, serializer: SellerSerializer, status: 200
	end

	def show_buyer
		user = User.where('id=?', session[:user_id]).includes(:bid)
		render json: user, serializer: BuyerSerializer, status: 200
	end

	def buyer
		user = User.all.where('is_seller=?', false)
		render json: user, status: 200
	end

	def seller
		user = User.all.where('is_seller=?', true).includes(:products)
		render json: user, each_serializer: SellerSerializer, status: 200
	end

	private

	def render_user_not_found
		render json: {errors: ["User not found"]}, status: 404
	end

	def user_params
		params.permit(:name, :email, :password, :password_confirmation, :is_seller)
	end
end
