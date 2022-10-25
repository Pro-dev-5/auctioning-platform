# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# cat = %w!jewellery art ceramics!
location = %w!Nairobi Nakuru Mombasa Eldoret Thika Kiambu!

puts 'Seeding Categories...'
Category.create(name: 'Art Collections', description: 'Asian Arts / 5000 Years', image: '../../public/images/art.webp')
Category.create(name: 'Ceramic Collections', description: 'Persian Qajar Ceramic Polychrome Vases', image: '../../public/images/ceramic.webp')
Category.create(name: 'Jewel Collections', description: 'Superb Jewels from the "Sunrise Ruby" Collection', image: '../../public/images/jewel.webp')


puts 'Seeding Sellers...'
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
		category_id: rand(1..3),
		current_bid: rand(300..400)
	)
end

puts 'Seeding buyers...'
for i in 1..10
	Buyer.create(name: Faker::Name.first_name, email: "buyer@example.com", password: "#{i}")
end

puts "Seeding bids..."
for i in 1..20
	Bid.create(
		buyer_id: rand(1..10),
		product_id: rand(1..18),
		current_bid: rand(300..400)
	)
end

puts '...done seeding'