class DowntimeAlertController < ApplicationController
  before_action :authenticate_user!

  def index
    @medical_devices = MedicalDevice.where('medical_devices.total_down_time > ?', 14)

    @medical_devices = @medical_devices.as_json

    render json: @medical_devices, status: :ok
  end
end
