class AddWarrantyDatesToMd < ActiveRecord::Migration[7.0]
  def change
    add_column :medical_devices, :warranty_end_date, :date
    add_column :medical_devices, :warranty_start_date, :date
  end
end
