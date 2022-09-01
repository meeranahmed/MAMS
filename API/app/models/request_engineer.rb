class RequestEngineer < ApplicationRecord
  belongs_to :medical_device
  belongs_to :user
end
