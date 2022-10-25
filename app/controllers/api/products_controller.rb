class Api::ProductsController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_prod_not_found
	def index
		prod = Product.all.includes(:bids)
		render json: prod, each_serializer: ProductShowSerializer, status: :ok
	end

	def show
		prod = find_prod
		render json: prod, serializer: ProductShowSerializer, status: :ok
	end

	def create
		prod = Product.create!(prod_params)
		render json: prod, status: :created
	end

	def update
		prod = find_prod
		prod.update!(prod_params)
		render json: prod, status: :accepted
	end

	def destroy
		prod = find_prod
		prod.destroy
		render json: {}, status: :accepted
	end

	private

	def find_prod
		Product.find(params[:id])
	end

	def render_prod_not_found
		render json: {errors: ["Product not found"]}, status: :not_found
	end

	def prod_params
		params.permit(:image_1, :image_2, :image_3, :name, :location, :date, :time, :starting_price, :seller_id, :category_id, :current_bid)
	end
end
