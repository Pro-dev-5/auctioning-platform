class WinningBidMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.winning_bid_mailer.winner.subject
  #
  def winner(bid, person)
    @bid = bid
		@person = person

    mail(
			from: "Bidding <biddingforstuffsdemo@gmail.com>",
			to: @person.email,
			subject: "Winning bid"
		)
  end
end
