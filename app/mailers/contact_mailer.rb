class ContactMailer < ApplicationMailer
  default from: 'tijana@tijana-walks.com'


  def thank_you
    @contact = params[:contact_message]
    mail(to: @contact.email, subject: "Thank you for reaching out")
  end

  def contact_alert
    @contact = params[:contact_message]

    contact_recipients = [ "capodacac@gmail.com","tidzix@gmail.com" ]
    mail( to: contact_recipients.join(","), subject: "Contact Form Submission - Tijana Walks.com" )
  end
end
