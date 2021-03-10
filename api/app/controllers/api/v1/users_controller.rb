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
      @user = User.new(user_params)
        if @user.save
          login!
          render json: { status: :created, user: @user }
        else
          render json: { status: 500 }
        end
    end

    # def edit
    #   @user.find(params[:id])
    # end

    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        render json: {
          status: :updated,
          user: @user
        }
      else
        render json: { status: 500 }
      end
    end

    private

      def user_params
          params.require(:user).permit(:name, :email, :password, :password_confirmation, :image)
      end
  end
end
end
