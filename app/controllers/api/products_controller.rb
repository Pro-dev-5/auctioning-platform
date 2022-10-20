class Api::ProductsController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_prod_not_found
	def index
		render json: Product.all, status: :ok
	end

	def show
		prod = Product.find(params[:id])
		render json: prod, status: :ok
	end

	private

	def render_prod_not_found
		render json: {errors: ["Product not found"]}, status: :not_found
	end
end
