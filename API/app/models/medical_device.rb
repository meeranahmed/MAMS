class MedicalDevice < ApplicationRecord
  belongs_to :maintenance_company
  belongs_to :user
  has_many :request_engineers, dependent: :destroy
  has_many :request_maintenance_companies, dependent: :destroy
  has_many :request_scrappings, dependent: :destroy
  has_many :notifications, dependent: :destroy
  has_many :ppm_logs, dependent: :destroy
  has_many :cm_logs, dependent: :destroy

  enum callibration_frequency: %i[annually semi_annually]
  enum status: %i[active inactive scrapped]
end
