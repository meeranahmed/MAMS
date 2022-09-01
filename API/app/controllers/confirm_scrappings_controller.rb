class ConfirmScrappingsController < ApplicationController
  before_action :authenticate_user!

  def create
    @medical_device = MedicalDevice.find(params[:medical_device_id])
    @role = current_user.role
    if @role == 'headEngineer'
      @admin = User.find_by(role: 'admin')
      response = HTTP.post('https://app.nativenotify.com/api/indie/notification',
                           json: { 'subID' => (@admin[:id]).to_s, 'appId' => 3220,
                                   'appToken' => 'otbSkQxLZhTtXBD0xW6CXl', 'title' => params[:medical_device_id].to_s,
                                   'message' => confirm_scrappings_params[:scrapping_reason].to_s,
                                   "pushData": "{\"scrapping_reason\" : \"#{confirm_scrappings_params[:scrapping_reason]}\"}" })
      Notification.create!(title: @medical_device[:equipment_name],
                           message: confirm_scrappings_params[:scrapping_reason].to_s,
                           medical_device_id: @medical_device[:id], user_id: @admin[:id])

    elsif @role == 'admin'

      @medical_device.update!(status: 'scrapped')
    end

    render json: @medical_device, status: :ok
  end

  private

  def confirm_scrappings_params
    params.permit(:scrapping_reason)
  end
end
