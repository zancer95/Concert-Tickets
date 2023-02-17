class GameCollectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :platform

  def name
    object.game.name
  end

  def genre
    object.game.genre
  end

  def platform
    object.game.platform
  end

end
  # has_one :user
  # has_one :game