class AddFieldsToContactMessage < ActiveRecord::Migration[5.2]
  def change
    add_column :contact_messages, :name, :string, presence: true
    add_column :contact_messages, :email, :string, presence: true
    add_column :contact_messages, :message, :string, presence: true, length: { minumum: 10 }
  end
end
