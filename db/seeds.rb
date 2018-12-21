@complete = [true, false]
50.times do
  Item.create(
    name: Faker::Commerce.product_name,
    price: Faker::Commerce.price.to_f,
    complete: @complete.sample
  )
end