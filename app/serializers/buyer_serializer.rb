class BuyerSerializer < ActiveModel::Serializer
  attributes :id, :name
	has_many :bids
end
