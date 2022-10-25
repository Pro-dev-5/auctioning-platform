class AddCurrentBidToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :current_bid, :integer
  end
end
