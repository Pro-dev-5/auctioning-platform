class BidSerializer < ActiveModel::Serializer
  attributes :id, :buyer_id, :product_id, :start_price, :current_bid
end
