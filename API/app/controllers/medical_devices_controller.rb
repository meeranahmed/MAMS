class MedicalDevicesController < ApplicationController
  before_action :authenticate_user!
  def index
    authorize_role
    @medical_devices = policy_scope(MedicalDevice).all

    render json: @medical_devices, status: :ok
  end

  def show
    authorize_role

    # UserMailer.send_email('mostafaayad67@gmail.com', 'yalaSubject', 'yalaBody').deliver_now
    @medical_device = policy_scope(MedicalDevice).find(params[:id])
    @maintenance_company = MaintenanceCompany.find(@medical_device[:maintenance_company_id])
    @medical_device = @medical_device.as_json
    @medical_device[:maintenance_company_email] = @maintenance_company[:email]
    render json: @medical_device, status: :ok
  end

  def create
    authorize_role

    @medical_device = MedicalDevice.create!(medical_device_params)

    render json: @medical_device, status: 201
  end

  def update
    authorize_role

    @medical_device = policy_scope(MedicalDevice).find(params[:id])
    @medical_device.update!(medical_device_params)

    render json: @medical_device, status: :ok
  end

  def destroy
    authorize_role

    policy_scope(MedicalDevice).find(params[:id]).destroy!

    render json: { message: "Medical Device with id: #{params[:id]} has been deleted successfully" }, status: 202
  end

  private

  def medical_device_params
    params.permit(:manufacturer,
                  :equipment_name,
                  :equipment_num,
                  :model,
                  :hospital_num,
                  :responsible_personnel,
                  :department,
                  :floor,
                  :room,
                  :installation_date,
                  :warranty,
                  :warranty_period,
                  :warranty_start_date,
                  :warranty_end_date,
                  :contract,
                  :contract_period,
                  :contract_start_date,
                  :contract_end_date,
                  :callibration_date,
                  :callibration_frequency,
                  :ppm_frequency,
                  :ppm_date,
                  :status,
                  :maintenance_company_id,
                  :user_id)
  end

  def authorize_role
    authorize MedicalDevice
  end
end
