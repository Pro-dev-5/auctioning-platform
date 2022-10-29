class CreateBids < ActiveRecord::Migration[6.1]
  def change
    create_table :bids do |t|
      t.integer :user_id
      t.integer :product_id
      t.integer :bid_placed

      t.timestamps
    end
  end
end
