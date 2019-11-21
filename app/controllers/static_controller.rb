class StaticController < ApplicationController

  def show
    render params[:url]
  end

  def home
  end

end
