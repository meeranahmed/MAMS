class StatController < ApplicationController
  before_action :authenticate_user!
  def index
    @stats = {}
    @medical_devices = MedicalDevice
    @medical_devices = @medical_devices.where(department: stat_params[:department]) if stat_params[:department].present?

    @stats[:count] = @medical_devices.all.count
    @stats[:active_devices] = @medical_devices.where(status: 'active').count
    @stats[:scrapped_devices] = @medical_devices.where(status: 'scrapped').count
    @stats[:inactive_devices] = @medical_devices.where(status: 'inactive').count
    @stats[:has_warranty] = @medical_devices.where(warranty: 'yes').count
    @stats[:has_contract] = @medical_devices.where(contract: 'yes').count
    @stats[:has_neither] = @medical_devices.where(warranty: 'no').where(contract: 'no').count

    @stat_response = [

      { name: 'Functioning Devices', count: @stats[:active_devices], keyword: 'active' },
      { name: 'Not Functioning Devices', count: @stats[:inactive_devices], keyword: 'inactive' },
      { name: 'Scrapped Devices', count: @stats[:scrapped_devices], keyword: 'scrapped' },
      { name: 'In Warranty', count: @stats[:has_warranty], keyword: 'warranty' },
      { name: 'In Contract ', count: @stats[:has_contract], keyword: 'contract' },
      { name: 'Neither Warranty Nor Contract', count: @stats[:has_neither], keyword: 'neither' },
      { name: 'Total Devices', count: @stats[:count], keyword: 'total' }

    ]
    render json: @stat_response, status: :ok
  end

  def active
    @stats = {}
    @medical_devices = MedicalDevice
    @medical_devices = @medical_devices.where(department: stat_params[:department]) if stat_params[:department].present?

    @medical_devices = @medical_devices.where(status: 'active')
    @medical_devices = @medical_devices.as_json

    render json: @medical_devices, status: :ok
  end

  def inactive
    @stats = {}
    @medical_devices = MedicalDevice
    @medical_devices = @medical_devices.where(department: stat_params[:department]) if stat_params[:department].present?

    @medical_devices = @medical_devices.where(status: 'inactive')
    @medical_devices = @medical_devices.as_json

    render json: @medical_devices, status: :ok
  end

  def scrapped
    @stats = {}
    @medical_devices = MedicalDevice
    @medical_devices = @medical_devices.where(department: stat_params[:department]) if stat_params[:department].present?

    @medical_devices = @medical_devices.where(status: 'scrapped')
    @medical_devices = @medical_devices.as_json

    render json: @medical_devices, status: :ok
  end

  def warranty
    @stats = {}
    @medical_devices = MedicalDevice
    @medical_devices = @medical_devices.where(department: stat_params[:department]) if stat_params[:department].present?

    @medical_devices = @medical_devices.where(warranty: 'yes')
    @medical_devices = @medical_devices.as_json

    render json: @medical_devices, status: :ok
  end

  def contract
    @stats = {}
    @medical_devices = MedicalDevice
    @medical_devices = @medical_devices.where(department: stat_params[:department]) if stat_params[:department].present?

    @medical_devices = @medical_devices.where(contract: 'yes')
    @medical_devices = @medical_devices.as_json

    render json: @medical_devices, status: :ok
  end

  def neither
    @stats = {}
    @medical_devices = MedicalDevice
    @medical_devices = @medical_devices.where(department: stat_params[:department]) if stat_params[:department].present?

    @medical_devices = @medical_devices.where(warranty: 'no').where(contract: 'no')
    @medical_devices = @medical_devices.as_json

    render json: @medical_devices, status: :ok
  end

  def department
    @medical_devices = MedicalDevice

    @medical_devices = @medical_devices.group(:department).count

    @department_stats = []
    @medical_devices.each do |department, count|
      @department_stats << { name: department, count: count }
    end
    render json: @department_stats, status: :ok
  end

  private

  def stat_params
    params.permit(:department)
  end
end
