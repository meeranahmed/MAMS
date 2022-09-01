class PpmLogsController < ApplicationController
  before_action :authenticate_user!
  def index
    @ppm_logs = PpmLog.where(medical_device_id: params[:medical_device_id])
    @ppm_logs = @ppm_logs.as_json

    render json: @ppm_logs, status: :ok
  end

  def show
    @ppm_log = PpmLog.find(params[:id])
    @medical_device = MedicalDevice.find(params[:medical_device_id])
    @ppm_log = @ppm_log.as_json
    @ppm_log[:equipment_name] = @medical_device[:equipment_name]
    render json: @ppm_log, status: :ok
  end

  def create
    ppm_logs_attributes = ppm_logs_params
    ppm_logs_attributes[:user_id] = current_user.id
    ppm_logs_attributes[:medical_device_id] = params[:medical_device_id]
    @ppm_log = PpmLog.create!(ppm_logs_attributes)

    render json: @ppm_log, status: 201
  end

  private

  def ppm_logs_params
    params.permit(:visit_date, :operation)
  end
end
