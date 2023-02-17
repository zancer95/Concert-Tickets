class UsersController < ApplicationController

    def show
        render json: @current_user, status: :created
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:email, :password)
    end
end
