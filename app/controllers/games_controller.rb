class GamesController < ApplicationController

    def index
        render json: Game.all
    end

    def show
        user = User.find(params[:id])
        gamecollection = user.games
        render json: gamecollection, status: :ok
    end 

    def create
        game = Game.create!(game_params)
        render json: game, status: :created
    end

    private

    def game_params
        params.permit(:name, :genre, :platform)
    end
end
