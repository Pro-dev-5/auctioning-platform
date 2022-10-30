class ProductShowSerializer < ActiveModel::Serializer
  attributes :id, :image_1, :image_2, :image_3, :name, :location, :date, :time, :starting_price, :user_id, :category_id, :current_bid
	belongs_to :bids
	belongs_to :category, serializer: CategoryShowSerializer
end
