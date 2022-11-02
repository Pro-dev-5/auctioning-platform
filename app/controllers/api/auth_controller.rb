class Api::AuthController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_logged_in
	def authorize
		user = User.find(session[:user_id])
		if !user.is_seller
			render json: {errors: "You need to be logged in as a seller"}, status: 401
		end
	end
end
