class CreatePpmLogs < ActiveRecord::Migration[7.0]
  def change
    create_table :ppm_logs do |t|
      t.date :visit_date
      t.string :operation
      t.references :medical_device, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
