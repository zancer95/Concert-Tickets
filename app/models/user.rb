class User < ApplicationRecord
    has_secure_password
    has_many :game_collections
    has_many :games, through: :game_collections

    validates :email, presence: true
    validates :password, presence: true
end
