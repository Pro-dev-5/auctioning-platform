class BidSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :bid_placed
end
