class Category < ApplicationRecord
	has_many :products
	has_many :sellers, through: :products
	has_many :bids, through: :products
end
