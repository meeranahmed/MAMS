class AddContractToMd < ActiveRecord::Migration[7.0]
  def change
    add_column :medical_devices, :contract_period, :string
    add_column :medical_devices, :pending_request_date, :date
    add_column :medical_devices, :contract_start_date, :date
    add_column :medical_devices, :contract_end_date, :date
    add_column :medical_devices, :callibration_date, :date
  end
end
