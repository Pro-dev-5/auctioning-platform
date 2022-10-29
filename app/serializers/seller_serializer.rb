class SellerSerializer < ActiveModel::Serializer
  attributes :id, :name
	has_many :products, serializer: ProductSellerSerializer
end
