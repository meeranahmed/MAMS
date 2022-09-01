class CreateMedicalDevices < ActiveRecord::Migration[7.0]
  def change
    create_table :medical_devices do |t|
      t.string :manufacturer
      t.string :equipment_num
      t.string :equipment_name
      t.string :model
      t.string :hospital_id
      t.string :responsible_personnel
      t.string :department
      t.string :floor
      t.string :room
      t.date :installation_date
      t.string :warranty
      t.string :warranty_period
      t.string :ppm_frequency
      t.date :ppm_date
      t.string :contract

      t.timestamps
    end
  end
end
