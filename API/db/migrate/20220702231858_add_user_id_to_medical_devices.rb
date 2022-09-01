class AddUserIdToMedicalDevices < ActiveRecord::Migration[7.0]
  def change
    add_reference :medical_devices, :user
  end
end
