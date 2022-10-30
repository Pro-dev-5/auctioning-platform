require "test_helper"

class WinningBidMailerTest < ActionMailer::TestCase
  test "winner" do
		bid = Bid.last
		pers = User.last
    mail = WinningBidMailer.winner(bid, pers)
		
		assert_emails 1 do
			email.deliver_now
		end

    assert_equal "Winner", mail.subject
    # assert_equal ["mickeymurage@gmail.com"], mail.to
    assert_equal ["mickeymurage@gmail.com"], mail.from
  end

end
