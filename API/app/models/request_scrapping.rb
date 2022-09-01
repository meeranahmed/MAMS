class RequestScrapping < ApplicationRecord
  belongs_to :medical_device
  belongs_to :user
end
