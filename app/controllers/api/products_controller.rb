class Api::ProductsController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_prod_not_found
	def index
		prod = Product.all.includes(:bids)
		render json: prod, each_serializer: ProductShowSerializer, status: :ok
	end

	def show
		prod = Product.find(params[:id])
		render json: prod, serializer: ProductShowSerializer, status: :ok
	end

	private

	def render_prod_not_found
		render json: {errors: ["Product not found"]}, status: :not_found
	end
end
