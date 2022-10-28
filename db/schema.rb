# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2022_10_27_135346) do

=======
ActiveRecord::Schema[7.0].define(version: 2022_10_25_095820) do
>>>>>>> 27cee691a76e5f2cba15f14ffdea2cc8330d596f
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bids", force: :cascade do |t|
<<<<<<< HEAD
    t.integer "user_id"
    t.integer "product_id"
    t.integer "bid_placed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
=======
    t.integer "buyer_id"
    t.integer "product_id"
    t.integer "current_bid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "buyers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
>>>>>>> 27cee691a76e5f2cba15f14ffdea2cc8330d596f
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
<<<<<<< HEAD
    t.string "image"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
=======
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
    t.string "image"
>>>>>>> 27cee691a76e5f2cba15f14ffdea2cc8330d596f
  end

  create_table "products", force: :cascade do |t|
    t.string "image_1"
    t.string "image_2"
    t.string "image_3"
    t.string "name"
    t.string "location"
    t.datetime "date"
    t.string "time"
    t.integer "starting_price"
<<<<<<< HEAD
    t.integer "user_id"
    t.integer "category_id"
    t.integer "current_bid"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.boolean "is_seller"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
=======
    t.integer "seller_id"
    t.integer "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "current_bid"
  end

  create_table "sellers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
>>>>>>> 27cee691a76e5f2cba15f14ffdea2cc8330d596f
  end

end
