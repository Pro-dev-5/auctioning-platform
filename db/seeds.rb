# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

cat = %w!jewellery art ceramics!
location = %w!Nairobi Nakuru Mombasa Eldoret Thika Kiambu!

puts 'Seeding Categories...'
for i in cat
	Category.create(name: i)
end

puts 'seeding Sellers...'
for i in 1..5
	Seller.create(name: Faker::Name.name, email: "example@gmail.com", password: "#{i}")
end

puts 'Seeding products...'
for i in 1..18
	Product.create(
		name: Faker::Commerce.product_name,
		location: location[rand(1...location.size)],
		date: "13-02-2022",
		time: "10:00 a.m",
		starting_price: rand(100..300),
		seller_id: rand(1..5),
		category_id: rand(1..3)
	)
end

puts '...done seeding'