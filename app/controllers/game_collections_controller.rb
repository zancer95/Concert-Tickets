class GameCollectionsController < ApplicationController
    
    def index
        render json: GameCollection.all
    end
    
    def create
        # gamecollection = GameCollection.create!(gamecollections_params)
        # render json: gamecollection, status: :created
        user = User.find(params[:user_id])
        game = Game.find(params[:game_id])
        gamecollection = user.game_collections.create(game: game)
        render json: gamecollection, status: :created
    end

    def destroy
        gamecollection = GameCollection.find(params[:id])
        gamecollection.destroy
        head :no_content
    end
    
      private
    
      def gamecollections_params
        params.permit(:user_id, :game_id)
      end

end
