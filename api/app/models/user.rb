class User < ApplicationRecord

  #name周りの制限
  validates :name, presence: true, length: { maximum: 50 }

  #email周りの制限
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  #password周りの制限
  has_secure_password
  validates :password, presence: true, length: { minimum: 6 }, allow_nil: true

end
