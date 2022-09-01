class RejectScrappingsController < ApplicationController
  def index
    render json: 'scrapping reuest rejected', status: :ok
  end
end
