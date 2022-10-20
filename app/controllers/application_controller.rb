class ApplicationController < ActionController::API
	include ActionController::Cookies
	# before_action :authorized
	wrap_parameters format: []
	rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable

	private

	def authorized_seller
		user = Seller.find_by(id: session[:seller_id])
		if !session.include? :seller_id
			render json: {error: ["Not authorized"]}, status: :unauthorized
		end
	end

	def render_unprocessable(invalid)
		render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
	end
end
