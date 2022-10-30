# Preview all emails at http://localhost:3000/rails/mailers/winning_bid_mailer
class WinningBidMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/winning_bid_mailer/winner
  def winner
		bid = Bid.last
		person = User.last
    WinningBidMailer.winner(bid, person)
  end

end
