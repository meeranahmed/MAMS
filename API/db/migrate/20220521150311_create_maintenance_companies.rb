class CreateMaintenanceCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :maintenance_companies do |t|
      t.string :name
      t.string :email
      t.string :contact_person
      t.timestamps
    end
  end
end
