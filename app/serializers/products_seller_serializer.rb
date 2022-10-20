class ProductsSellerSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :starting_price, :category_id, :date, :time
end
