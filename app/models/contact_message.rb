# == Schema Information
#
# Table name: contact_messages
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#  email      :string
#  message    :string
#

class ContactMessage < ApplicationRecord
  validates :email, :message, :name, presence: true
  validates :email, format:{ with: URI::MailTo::EMAIL_REGEXP }
end
