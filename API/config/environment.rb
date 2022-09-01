# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
  user_name: 'apikey', # This is the string literal 'apikey', NOT the ID of your API key
  password: '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', # This is the secret sendgrid API key which was issued during API key creation
  domain: 'yourdomain.com',
  address: 'smtp.sendgrid.net',
  port: 587,
  authentication: :plain,
  enable_starttls_auto: true
}
