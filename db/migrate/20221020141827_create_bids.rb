class CreateBids < ActiveRecord::Migration[7.0]
  def change
    create_table :bids do |t|
      t.integer :buyer_id
      t.integer :product_id
      t.integer :start_price
      t.integer :current_bid

      t.timestamps
    end
  end
end
