class AddMcToMd < ActiveRecord::Migration[7.0]
  def change
    add_reference :medical_devices, :maintenance_company
  end
end
