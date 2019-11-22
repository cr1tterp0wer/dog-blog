class StaticController < ApplicationController
  skip_before_action :authorize

  def show
    @contact_message = ContactMessage.new
    render params[:url]
  end

  def home
  end

end
