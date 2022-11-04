class ProductSellerSerializer < ActiveModel::Serializer
  attributes :id, :image_1, :image_2, :image_3, :name, :location, :starting_price, :category_id, :date, :time, :sold_to
end
