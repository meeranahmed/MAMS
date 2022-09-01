class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    authorize_role

    users = policy_scope(User).all
    render json: users, status: :ok
  end

  def show
    authorize_role

    user = policy_scope(User).find(params[:id])
    render json: user, status: :ok
  end

  def create
    authorize_role

    user = policy_scope(User).create!(user_params)
    render json: user, status: 201
  end

  def update
    authorize_role

    user = policy_scope(User).find(params[:id])
    user.update!(user_params)
    render json: user, status: :ok
  end

  def destroy
    authorize_role

    policy_scope(User).find(params[:id]).destroy!
    render json: { message: "user with id: #{params[:id]} has been deleted successfully" }, status: 202
  end

  private

  def user_params
    params.permit(:email, :password, :role)
  end

  def authorize_role
    authorize User
  end
end
