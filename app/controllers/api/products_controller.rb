class Api::ProductsController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_prod_not_found
	skip_before_action :authorized_as_seller, only: [:index, :show, :destroy, :sell]
	skip_before_action :authenticated_user, only: [:index, :show]
	def index
		prod = Product.all.includes(:bids, :category)
		render json: prod, each_serializer: ProductShowSerializer, status: :ok
	end

	def show
		prod = find_prod
		render json: prod, serializer: ProductShowSerializer, status: :ok
	end

	def create
		prod = Product.new(prod_params)
		prod.current_bid = prod.starting_price
		prod.save!
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

	def sell
    prod = Product.find(params[:product_id])
    bids = Bid.where("product_id=?", prod.id)
    if bids != []
      winning_bid = bids.last
      winner = User.find(winning_bid.user_id)
      prod.sold_to = winner.email
			prod.save
    else
      prod.sold_to = "failed"
			prod.save
    end
    render json: {Success: "Bidding complete"}, status: 200
	end

	private

	def find_prod
		Product.find(params[:id])
	end

	def render_prod_not_found
		render json: {errors: ["Product not found"]}, status: :not_found
	end

	def prod_params
		params.permit(:image_1, :image_2, :image_3, :name, :location, :date, :time, :starting_price, :user_id, :category_id, :current_bid, :description)
	end
end
