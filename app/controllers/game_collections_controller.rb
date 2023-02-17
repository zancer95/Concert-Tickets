class GameCollectionsController < ApplicationController
    
    def index
        game_collections = GameCollection.all
        render json: game_collections, each_serializer: GameCollectionSerializer
    end

    def show
        game_collections = @current_user.game_collections
        render json: game_collections, status: :ok
    end

    def create
        gamecollection = @current_user.game_collections.create!(gamecollections_params)
        render json: gamecollection, status: :created
    end

    def update
        game_collection = GameCollection.find(params[:id])
        game_collection.update(game_collection_params)
        render json: game_collection
    end

    def destroy
        gamecollection = GameCollection.find(params[:id])
        gamecollection.destroy
        head :no_content
    end
    
      private
      
      def game_collection_params
        params.require(:game_collection).permit(:name, :platform, :genre)
      end
      
      def gamecollections_params
        params.permit(:user_id, :game_id)
      end

end
