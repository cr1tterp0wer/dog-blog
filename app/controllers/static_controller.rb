class StaticController < ApplicationController
  skip_before_action :authorize

  def show
    render params[:url]
  end

  def home
  end

end
