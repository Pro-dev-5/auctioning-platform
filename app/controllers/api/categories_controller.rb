class Api::CategoriesController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_cat_not_found
	def index
		render json: Category.all, status: :ok
	end

	def show
		cat = Category.find(params[:id])
		render json: cat, status: :ok
	end

	def render_cat_not_found
		render json: {error: "Category not found"}
	end
end
