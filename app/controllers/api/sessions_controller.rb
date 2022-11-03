class Api::SessionsController < ApplicationController
	skip_before_action :authorized_as_seller, only: [:destroy, :create]
	skip_before_action :authenticated_user, only: [:destroy, :create]
	def create
		user = User.find_by(name: params[:name])
		if user&.authenticate(params[:password])
			session[:user_id] = user.id
			render json: user, status: 201
		else
			render json: {errors: ["Invalid username or password"]}, status: 404
		end
	end

	def destroy
		session.delete :user_id
		head :no_content
	end
end
