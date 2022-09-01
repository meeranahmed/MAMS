class UserMailer < ApplicationMailer
  layout false, only: 'email_method_no_layout'
  def send_email(to, subject, body)
    mail(to: to, subject: subject, body: body)
  end
end
