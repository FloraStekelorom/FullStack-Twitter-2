class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def feed
    render 'feed'
  end

  def userpage
    render 'userpage'
  end

end
