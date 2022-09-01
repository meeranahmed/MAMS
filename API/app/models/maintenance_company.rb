class MaintenanceCompany < ApplicationRecord
  has_many :medical_devices, dependent: :destroy
end
