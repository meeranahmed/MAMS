class AddFieldsToCm < ActiveRecord::Migration[7.0]
  def change
    add_column :cm_logs, :engineer_request_date, :date
    rename_column :cm_logs, :request_date, :maintenance_request_date
  end
end
