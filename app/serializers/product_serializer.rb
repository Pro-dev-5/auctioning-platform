class ProductSerializer < ActiveModel::Serializer
  attributes :id, :image_1, :image_2, :image_3, :name, :location, :date, :time, :starting_price, :seller_id, :category_id
end
