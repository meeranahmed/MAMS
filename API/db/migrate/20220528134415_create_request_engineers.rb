class CreateRequestEngineers < ActiveRecord::Migration[7.0]
  def change
    create_table :request_engineers do |t|
      t.string :error_msg
      t.string :other_notes
      t.references :medical_device, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
