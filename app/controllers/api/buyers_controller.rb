class Api::BuyersController < ApplicationController
	def index
		render json: Buyer.all, status: :ok
	end

	def show
		buy = Buyer.find(params[:id])
		render json: cat, status: :ok
	end
end
