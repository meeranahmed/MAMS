class AddFieldsToMd < ActiveRecord::Migration[7.0]
  def change
    add_column :medical_devices, :total_down_time, :integer
    add_column :medical_devices, :engineer_request_date, :date
    add_column :medical_devices, :callibration_frequency, :integer
    rename_column :medical_devices, :pending_request_date, :maintenance_request_date
    rename_column :medical_devices, :hospital_id, :hospital_num
  end
end
