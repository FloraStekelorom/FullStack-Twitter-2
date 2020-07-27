class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def feed
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)

    if session
      @user = session.user
      render 'feed', status: :ok
    else
      redirect_to :root
    end
  end

  def userpage
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)

    if session
      @user = session.user
      render 'userpage', status: :ok
    else
      redirect_to :root
    end

  end

end
