class ProductShowSerializer < ActiveModel::Serializer
  attributes :id, :image_1, :image_2, :image_3, :name, :location, :date, :time, :starting_price, :seller_id, :category_id
	belongs_to :bids
	belongs_to :category
end
