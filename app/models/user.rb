class User < ApplicationRecord
	has_many :products
	has_many :bids
	has_many :categories, through: :products
	has_secure_password

	validates :email, presence: true
	validates :email, uniqueness: true
end
