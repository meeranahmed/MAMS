Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
                     controllers: {
                       sessions: 'users/sessions',
                       registrations: 'users/registrations'
                     }

  resources :users
  resources :maintenance_companies
  resources :medical_devices do
    resources :request_engineers
    resources :request_maintenance_companies
    resources :request_scrappings
    resources :confirm_scrappings
    resources :reject_scrappings
    resources :ppm_logs
    resources :cm_logs
    resources :contract_renewal
  end
  resources :notifications
  resources :contract_alert
  resources :callibration_alert
  resources :warranty_alert
  resources :downtime_alert
  resources :stat, only: %i[index]

  get 'stat/active', action: :active, controller: 'stat'
  get '/stat/inactive', action: :inactive, controller: 'stat'
  get '/stat/scrapped', action: :scrapped, controller: 'stat'
  get '/stat/warranty', action: :warranty, controller: 'stat'
  get '/stat/contract', action: :contract, controller: 'stat'
  get '/stat/neither', action: :neither, controller: 'stat'
  get '/stat/department', action: :department, controller: 'stat'
end
