class Product < ApplicationRecord
	belongs_to :category
	belongs_to :seller
	has_many :bids, dependent: :destroy
	has_many :buyers, through: :bids
end
