class RemoveStartPriceFromBids < ActiveRecord::Migration[7.0]
  def change
		remove_column :bids, :start_price
  end
end
