class AddStatusToMedicalDevices < ActiveRecord::Migration[7.0]
  def change
    add_column :medical_devices, :status, :integer, default: 0
    add_column :medical_devices, :scrapping_cnt, :integer, default: 0
  end
end
