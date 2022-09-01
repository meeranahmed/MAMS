class CmLogsController < ApplicationController
  before_action :authenticate_user!
  def index
    @cm_logs = CmLog.where(medical_device_id: params[:medical_device_id])
    @cm_logs = @cm_logs.as_json
    render json: @cm_logs, status: :ok
  end

  def show
    @cm_log = CmLog.find(params[:id])
    @medical_device = MedicalDevice.find(params[:medical_device_id])
    @cm_log = @cm_log.as_json
    @cm_log[:equipment_name] = @medical_device[:equipment_name]
    render json: @cm_log, status: :ok
  end

  def create
    @medical_device = MedicalDevice.find(params[:medical_device_id])
    cm_logs_attributes = cm_logs_params
    cm_logs_attributes[:user_id] = current_user.id
    cm_logs_attributes[:medical_device_id] = params[:medical_device_id]
    cm_logs_attributes[:maintenance_request_date] = @medical_device[:maintenance_request_date]
    cm_logs_attributes[:engineer_request_date] = @medical_device[:engineer_request_date]
    cm_logs_attributes[:downtime] =
      (cm_logs_attributes[:repair_date].to_date - cm_logs_attributes[:engineer_request_date]).to_i.to_s
    @cm_log = CmLog.create!(cm_logs_attributes)

    @medical_device.update_columns(maintenance_request_date: nil, engineer_request_date: nil)
    @medical_device.update_attribute(:total_down_time,
                                     @medical_device[:total_down_time].to_i + cm_logs_attributes[:downtime].to_i)
    render json: @cm_log, status: 201
  end

  private

  def cm_logs_params
    params.permit(:visit_date, :repair_date, :operation)
  end
end
