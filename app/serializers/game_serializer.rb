class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :platform

  # belongs_to :users
end
