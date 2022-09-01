class CreateRequestMaintenanceCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :request_maintenance_companies do |t|
      t.string :error
      t.string :contract_status
      t.references :medical_device, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
