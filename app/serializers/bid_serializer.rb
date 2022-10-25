class BidSerializer < ActiveModel::Serializer
  attributes :id, :buyer_id, :product_id, :current_bid
end
