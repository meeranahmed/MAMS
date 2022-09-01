include ActionView::Helpers::DateHelper
class NotificationsController < ApplicationController
  before_action :authenticate_user!
  def index
    @notifications = Notification.where(user_id: current_user.id)
    @notifications = @notifications.as_json
    create_time_ago

    render json: @notifications, status: :ok
  end

  private

  def create_time_ago
    @notifications.each do |notification|
      notification[:time_ago] = time_ago_in_words(notification['created_at']) + ' ago'
    end
  end
end
