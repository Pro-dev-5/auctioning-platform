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
		user = User.find(bid[:user_id])
		if user.is_seller
			render json: {errors: ["Seller cannot bid"]}, status: 422
			return
		end
		
		if prod.sold_to
			render json: {errors: ["Product has already been sold"]}, status: 422
			return
		end

		if bid.bid_placed > prod.starting_price && bid.bid_placed > prod.current_bid
			bid.save!
			prod.current_bid = bid.bid_placed
			prod.save!
			render json: bid, status: :created
		else
			render json: {errors: ["Bid must be more than starting price"]}, status: 422
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
		params.permit(:user_id, :product_id, :bid_placed)
	end

	def render_bid_not_found
		render json: {errors: ["Bid not found"]}, status: :not_found
	end
end
