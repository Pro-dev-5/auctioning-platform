class Api::BidsController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_bid_not_found
	skip_before_action :authorized_as_seller, only: [:index, :create]
	skip_before_action :authenticated_user, only: [:index]
	
	def index
		render json: Bid.all, status: :ok
	end

	# def show
	# 	bid = Bid.find(params[:id])
	# 	render json: bid, status: :ok
	# end

	def create
		bid = Bid.new(bid_params)
		prod = Product.find(bid.product_id)
		if bid.current_bid > prod.starting_price && bid.current_bid > prod.current_bid
			bid.save!
			render json: bid, status: :created
		else
			render json: {errors: "Bid must be more than starting price"}, status: 422
		end
	end

	# def update
	# 	bid = find_bid
	# 	bid.update!(bid_params)
	# 	render json: bid, status: :accepted
	# end

	# def destroy
	# 	bid = find_bid
	# 	bid.destroy
	# 	render json: {}, status: :accepted
	# end

	private

	def bid_params
		params.permit(:user_id, :product_id, :current_bid)
	end

	def render_bid_not_found
		render json: {errors: ["Bid not found"]}, status: :not_found
	end
end
