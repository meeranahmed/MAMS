class CreatePdfs < ActiveRecord::Migration[7.0]
  def change
    create_table :pdfs do |t|
      t.string :link
      t.date :date
      t.string :type
      t.references :medical_device, null: false, foreign_key: true
      t.references :maintenance_company, null: false, foreign_key: true
      t.timestamps
    end
  end
end
