class CreateRequestScrappings < ActiveRecord::Migration[7.0]
  def change
    create_table :request_scrappings do |t|
      t.string :scrapping_reason
      t.references :medical_device, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
