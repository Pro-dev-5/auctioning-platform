class Api::BidsController < ApplicationController
	def index
		render json: Bid.all, status: :ok
	end

	def show
		cat = Bid.find(params[:id])
		render json: cat, status: :ok
	end
end
