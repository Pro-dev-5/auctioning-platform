class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :image_1
      t.string :image_2
      t.string :image_3
      t.string :name
      t.string :location
      t.datetime :date
      t.string :time
      t.integer :starting_price
			t.integer :seller_id
			t.integer :category_id

      t.timestamps
    end
  end
end
