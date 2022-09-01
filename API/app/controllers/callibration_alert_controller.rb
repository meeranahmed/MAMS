class CallibrationAlertController < ApplicationController
  before_action :authenticate_user!
  def index
    @medical_devices = MedicalDevice.where('medical_devices.callibration_date > ?', Date.today)
                                    .where('medical_devices.callibration_date < ?', Date.today + 2.months)
    @medical_devices = @medical_devices.as_json
    @medical_devices.each do |medical_device|
      medical_device[:remaining_time] = (medical_device['callibration_date'].to_date - Date.today).to_i
    end

    render json: @medical_devices, status: :ok
  end
end
