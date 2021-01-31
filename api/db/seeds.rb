3.times do |n|
  user = User.new(
    name: "テスター_#{n}",
    email: "test#{n}@example.com",
    password: "pass123",
    password_confirmation: "pass123"
  )
  user.save!
end
