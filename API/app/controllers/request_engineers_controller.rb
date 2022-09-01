class RequestEngineersController < ApplicationController
  before_action :authenticate_user!
  require 'http'
  require 'json'

  def create
    request_engineer_attributes = request_engineer_params
    request_engineer_attributes[:user_id] = current_user.id
    request_engineer_attributes[:medical_device_id] = params[:medical_device_id]
    @request_engineer = RequestEngineer.create!(request_engineer_attributes)
    @medical_device = MedicalDevice.find(params[:medical_device_id])

    unless @medical_device[:engineer_request_date]
      @medical_device.update!(engineer_request_date: @request_engineer[:created_at])
    end
    response = HTTP.post('https://app.nativenotify.com/api/indie/notification',
                         json: { 'subID' => (@medical_device[:user_id]).to_s, 'appId' => 3220,
                                 'appToken' => 'otbSkQxLZhTtXBD0xW6CXl', 'title' => @medical_device[:equipment_name],
                                 'message' => "#{request_engineer_attributes[:error_msg]} \n #{request_engineer_attributes[:other_notes]}",
                                 "pushData": "{\"screenName\" : \"Display\",\"id\" : \"#{@medical_device[:id]}\"}" })
    Notification.create!(title: @medical_device[:equipment_name],
                         message: "#{request_engineer_attributes[:error_msg]} \n #{request_engineer_attributes[:other_notes]}",
                         medical_device_id: params[:medical_device_id], user_id: @medical_device[:user_id])

    render json: @request_engineer, status: 201
  end

  private

  def request_engineer_params
    params.permit(:other_notes, :error_msg)
  end
end
