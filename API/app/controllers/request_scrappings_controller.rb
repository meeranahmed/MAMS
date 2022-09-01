class RequestScrappingsController < ApplicationController
  before_action :authenticate_user!
  require 'http'
  require 'json'

  def create
    request_scrapping_attributes = request_scrapping_params
    request_scrapping_attributes[:user_id] = current_user.id
    request_scrapping_attributes[:medical_device_id] = params[:medical_device_id]
    @request_scrapping = RequestScrapping.create!(request_scrapping_attributes)
    @medical_device = MedicalDevice.find(params[:medical_device_id])
    @head_engineer = User.find_by(role: 'headEngineer')
    response = HTTP.post('https://app.nativenotify.com/api/indie/notification',
                         json: { 'subID' => (@head_engineer[:id]).to_s, 'appId' => 3220,
                                 'appToken' => 'otbSkQxLZhTtXBD0xW6CXl', 'title' => @medical_device[:equipment_name],
                                 'message' => (request_scrapping_attributes[:scrapping_reason]).to_s,
                                 "pushData": "{\"screenName\" : \"ScrappingAction\",\"id\" : \"#{@medical_device[:id]}\"}" })

    Notification.create!(title: @medical_device[:equipment_name],
                         message: (request_scrapping_attributes[:scrapping_reason]).to_s,
                         medical_device_id: @medical_device[:id], user_id: @head_engineer[:id])
    render json: @request_scrapping, status: 201
  end

  private

  def request_scrapping_params
    params.permit(:scrapping_reason)
  end
end
