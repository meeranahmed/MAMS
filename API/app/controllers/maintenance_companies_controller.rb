class MaintenanceCompaniesController < ApplicationController
  before_action :authenticate_user!

  def create
    @maintenance_company = MaintenanceCompany.create!(maintenance_company_params)

    render json: @maintenance_company, status: 201
  end

  private

  def maintenance_company_params
    params.permit(:name, :email, :contact_person)
  end
end
