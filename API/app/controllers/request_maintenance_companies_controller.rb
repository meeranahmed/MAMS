class RequestMaintenanceCompaniesController < ApplicationController
  before_action :authenticate_user!
  require 'http'
  require 'json'

  def create
    request_maintenance_company_attributes = request_maintenance_company_params
    request_maintenance_company_attributes[:user_id] = current_user.id
    request_maintenance_company_attributes[:medical_device_id] = params[:medical_device_id]
    @request_maintenance_company = RequestMaintenanceCompany.create!(request_maintenance_company_attributes)
    @medical_device = MedicalDevice.find(params[:medical_device_id])
    unless @medical_device[:maintenance_request_date]
      @medical_device.update!(maintenance_request_date: @request_maintenance_company[:created_at])
    end
    @maintenance_company = MaintenanceCompany.find(@medical_device[:maintenance_company_id])

    UserMailer.send_email(@maintenance_company[:email],
                          "Maintenance request for device #{request_maintenance_company_attributes[:medical_device_id]}",
                          "Equipment Name: #{@medical_device[:equipment_name]} \n Model: #{@medical_device[:model]} \n Manufacturer Company: #{@medical_device[:manufacturer]} \n Total Downtime: #{@medical_device[:total_down_time]} \n Hospital Number: #{@medical_device[:hospital_num]} \n  Error: #{request_maintenance_company_attributes[:error]} \n Contract status: #{request_maintenance_company_attributes[:contract_status]} ").deliver_now

    render json: @request_maintenance_company, status: 201
  end

  private

  def request_maintenance_company_params
    params.permit(:contract_status, :error)
  end
end
