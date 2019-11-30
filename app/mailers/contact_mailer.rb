class ContactMailer < ApplicationMailer
  default from: 'tijana@tijana-walks.com'

  def thank_you
    @contact = params[:contact_message]
    mail(to: @contact.email, subject: "Thank you for reaching out")
  end

  def contact_alert
    @contact = params[:contact_message]
    mail( to: "capodacac@gmail.com", subject: "Tijana-Walks: Contact Alert" )
  end
end
