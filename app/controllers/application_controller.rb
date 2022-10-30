class ApplicationController < ActionController::API
	include ActionController::Cookies
	before_action :authenticated_user
	before_action :authorized_as_seller

	private
	
	def render_not_logged_in
		render json: {errors: ["You are not logged in"]}, status: 401
	end

	def authorized_as_seller
		@user = User.find(session[:user_id])
		if !@user.is_seller
			render json: {errors: ["#{@user.name} is not authorized to view this page"]}, status: 401
		end
		rescue ActiveRecord::RecordNotFound => invalid
			render_not_logged_in
	end

	def authenticated_user
		render json: {errors: ["Not authorized"]}, status: 401 unless session.include? :user_id
	end
end
