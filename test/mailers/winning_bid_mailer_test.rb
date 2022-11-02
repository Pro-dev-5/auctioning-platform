require "test_helper"

class WinningBidMailerTest < ActionMailer::TestCase
  test "winner" do
		bid = Bid.last
		pers = User.last
    mail = WinningBidMailer.winner(bid, pers)
		
		assert_emails 1 do
			email.deliver_now
		end
  end

end
