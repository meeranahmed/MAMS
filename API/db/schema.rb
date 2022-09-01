# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_11_181828) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cm_logs", force: :cascade do |t|
    t.date "visit_date"
    t.date "repair_date"
    t.date "maintenance_request_date"
    t.string "operation"
    t.string "downtime"
    t.bigint "medical_device_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "engineer_request_date"
    t.index ["medical_device_id"], name: "index_cm_logs_on_medical_device_id"
    t.index ["user_id"], name: "index_cm_logs_on_user_id"
  end

  create_table "maintenance_companies", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "contact_person"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "medical_devices", force: :cascade do |t|
    t.string "manufacturer"
    t.string "equipment_num"
    t.string "equipment_name"
    t.string "model"
    t.string "hospital_num"
    t.string "responsible_personnel"
    t.string "department"
    t.string "floor"
    t.string "room"
    t.date "installation_date"
    t.string "warranty"
    t.string "warranty_period"
    t.string "ppm_frequency"
    t.date "ppm_date"
    t.string "contract"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "maintenance_company_id"
    t.bigint "user_id"
    t.integer "status", default: 0
    t.integer "scrapping_cnt", default: 0
    t.string "contract_period"
    t.date "maintenance_request_date"
    t.date "contract_start_date"
    t.date "contract_end_date"
    t.date "callibration_date"
    t.date "warranty_end_date"
    t.date "warranty_start_date"
    t.date "total_down_time"
    t.date "engineer_request_date"
    t.integer "callibration_frequency"
    t.index ["maintenance_company_id"], name: "index_medical_devices_on_maintenance_company_id"
    t.index ["user_id"], name: "index_medical_devices_on_user_id"
  end

  create_table "notifications", force: :cascade do |t|
    t.string "title"
    t.string "message"
    t.bigint "medical_device_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["medical_device_id"], name: "index_notifications_on_medical_device_id"
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "pdfs", force: :cascade do |t|
    t.string "link"
    t.date "date"
    t.string "type"
    t.bigint "medical_device_id", null: false
    t.bigint "maintenance_company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["maintenance_company_id"], name: "index_pdfs_on_maintenance_company_id"
    t.index ["medical_device_id"], name: "index_pdfs_on_medical_device_id"
  end

  create_table "ppm_logs", force: :cascade do |t|
    t.date "visit_date"
    t.string "operation"
    t.bigint "medical_device_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["medical_device_id"], name: "index_ppm_logs_on_medical_device_id"
    t.index ["user_id"], name: "index_ppm_logs_on_user_id"
  end

  create_table "request_engineers", force: :cascade do |t|
    t.string "error_msg"
    t.string "other_notes"
    t.bigint "medical_device_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["medical_device_id"], name: "index_request_engineers_on_medical_device_id"
    t.index ["user_id"], name: "index_request_engineers_on_user_id"
  end

  create_table "request_maintenance_companies", force: :cascade do |t|
    t.string "error"
    t.string "contract_status"
    t.bigint "medical_device_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["medical_device_id"], name: "index_request_maintenance_companies_on_medical_device_id"
    t.index ["user_id"], name: "index_request_maintenance_companies_on_user_id"
  end

  create_table "request_scrappings", force: :cascade do |t|
    t.string "scrapping_reason"
    t.bigint "medical_device_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["medical_device_id"], name: "index_request_scrappings_on_medical_device_id"
    t.index ["user_id"], name: "index_request_scrappings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "street"
    t.string "city"
    t.string "phone_number"
    t.string "qualification"
    t.integer "role", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "jti", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "cm_logs", "medical_devices"
  add_foreign_key "cm_logs", "users"
  add_foreign_key "notifications", "medical_devices"
  add_foreign_key "notifications", "users"
  add_foreign_key "pdfs", "maintenance_companies"
  add_foreign_key "pdfs", "medical_devices"
  add_foreign_key "ppm_logs", "medical_devices"
  add_foreign_key "ppm_logs", "users"
  add_foreign_key "request_engineers", "medical_devices"
  add_foreign_key "request_engineers", "users"
  add_foreign_key "request_maintenance_companies", "medical_devices"
  add_foreign_key "request_maintenance_companies", "users"
  add_foreign_key "request_scrappings", "medical_devices"
  add_foreign_key "request_scrappings", "users"
end
