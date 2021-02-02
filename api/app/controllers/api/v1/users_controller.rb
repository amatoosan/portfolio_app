module Api
module V1
  class UsersController < ApplicationController

    def show
      @user = User.find(params[:id])
      render json: {
        user: @user
      }, status: :ok
    end

    def signup
      @user = User.new(users_params)
        if @user.save
          login!
          render json: { status: :created, user: @user }
        else
          render json: { status: 500 }
        end
    end

    private

      def users_params
          params.require(:user).permit(:name, :email, :password, :password_confirmation)
      end
  end
end
end
