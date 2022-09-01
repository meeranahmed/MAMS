class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :medical_devices, dependent: :destroy
  has_many :notifications, dependent: :destroy
  has_many :ppm_logs, dependent: :destroy
  has_many :cm_logs, dependent: :destroy

  enum role: %i[nurse engineer headEngineer admin]
end
