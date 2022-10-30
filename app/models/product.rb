class Product < ApplicationRecord
	belongs_to :category
	belongs_to :user
	has_many :bids, dependent: :destroy
end
