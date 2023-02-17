class Game < ApplicationRecord
    has_many :game_collections, dependent: :destroy
    has_many :users, through: :game_collections

    # validates :uniqueness, scope: {}
end
