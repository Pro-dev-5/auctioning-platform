class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :location
      t.datetime :date
      t.string :time
      t.integer :starting_price
      t.integer :user_id
      t.integer :category_id
      t.integer :current_bid
			t.string :description

      t.timestamps
    end
  end
end
