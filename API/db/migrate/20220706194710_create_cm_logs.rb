class CreateCmLogs < ActiveRecord::Migration[7.0]
  def change
    create_table :cm_logs do |t|
      t.date :visit_date
      t.date :repair_date
      t.date :request_date
      t.string :operation
      t.string :downtime
      t.references :medical_device, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
