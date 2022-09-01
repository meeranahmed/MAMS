class ContractRenewalController < ApplicationController
  before_action :authenticate_user!

  def create
    @medical_device = MedicalDevice.find(params[:medical_device_id])

    @maintenance_company = MaintenanceCompany.find(@medical_device[:maintenance_company_id])
    UserMailer.send_email(@maintenance_company[:email],
                          "Request for device #{params[:medical_device_id]}",
                          "#{contract_renewal_params[:body]} \n Equipment Name: #{@medical_device[:equipment_name]} \n Model: #{@medical_device[:model]} \n Manufacturer Company: #{@medical_device[:manufacturer]} \n Total Downtime: #{@medical_device[:total_down_time]} \n Hospital Number: #{@medical_device[:hospital_num]} ").deliver_now

    render json: 'mail has been sent!', status: :ok
  end

  private

  def contract_renewal_params
    params.permit(:body)
  end
end
