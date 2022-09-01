# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

def create_MD(department, equipment_name, manufacturer, model)
  yes_or_no = %w[yes no]
  MedicalDevice.create do |md|
    md.equipment_num = Faker::Alphanumeric.alphanumeric(number: 10, min_alpha: 5, min_numeric: 5)
    md.equipment_name = equipment_name
    md.manufacturer = manufacturer
    md.model = model
    md.hospital_num = '988'
    md.responsible_personnel = Faker::Name.name
    md.department = department
    md.floor = '6th'
    md.room = Faker::Number.number(digits: 2)
    md.installation_date = Faker::Date.between(from: 10.years.ago, to: 1.years.ago)
    md.warranty = yes_or_no[Faker::Number.between(from: 0, to: 1)]
    if md.warranty == 'yes'
      md.warranty_period = '2 years'
      md.warranty_start_date = Faker::Date.between(from: '01-06-2020', to: '01-09-2020')
      md.warranty_end_date = Faker::Date.between(from: '01-06-2022', to: '01-09-2022')
    end
    md.contract = if md.warranty == 'yes'
                    'no'
                  else
                    yes_or_no[Faker::Number.between(from: 0, to: 1)]
                  end
    if md.contract == 'yes' && md.warranty == 'no'
      md.contract_period = '3 years'
      md.contract_start_date = Faker::Date.between(from: '01-06-2019', to: '01-09-2019')
      md.contract_end_date = Faker::Date.between(from: '01-06-2022', to: '01-09-2022')
    end
    md.callibration_date = Faker::Date.between(from: '01-01-2022', to: '01-12-2022')
    md.callibration_frequency = Faker::Number.between(from: 0, to: 1)
    md.ppm_date = Faker::Date.between(from: '01-01-2022', to: '01-12-2022')
    md.ppm_frequency = '6 months'
    md.maintenance_company_id = 1
    md.user_id = Faker::Number.between(from: 1, to: 10)
    md.status = Faker::Number.between(from: 0, to: 1)
  end
end
##############################################
# CREATE MAINTENANCE COMPANY
MaintenanceCompany.create!(name: 'phillips',
                           email: 'bboba86@gmail.com',
                           contact_person: 'ahmed@gmail.com')
#############################################
# CREATE ENGINEER
(1..10).each do |i|
  User.create!(email: "eng#{i}@gmail.com",
               password: 'engPassword',
               role: 'engineer')
end
##############################################
# CREATE NURSE
User.create!(email: 'nurse@gmail.com',
             password: 'nursePassword',
             role: 'nurse')
##############################################
# CREATE HEAD ENGINEER
User.create!(email: 'headEngineer@gmail.com',
             password: 'headEngineerPassword',
             role: 'headEngineer')
##############################################
# CREATE ADMIN
User.create!(email: 'admin@gmail.com',
             password: 'adminPassword',
             role: 'admin')
#############################################
# CREATE MEDICAL DEVICES
(0..35).each do |_i|
  create_MD('Nursing Unit', 'Bed, Patient, Electric', 'Hill-Rom', '405')
  create_MD('Biomedical Workshop', 'Pump, Syringe', 'Fresenius', 'agilia IS')
  create_MD('Nursing Unit', 'Monitor, Vital Sign', 'Welch Allyn', 'spot')
  create_MD('Nursing Unit', 'Aspirator, Portable', 'medela', 'basic 30')
  create_MD('OPD', 'Amalgamator', 'GHIMAS', 'ghimas92')
  create_MD('Cath Lab', 'Defibrillator, External, Manual', 'Mindray', 'BeneHeart D6')
  create_MD('Store', 'Aspirator, Surgical', 'TOITU', 'VD')
  create_MD('Endoscopy', 'Video processor',  'Pentax', 'EPK-1000')
  create_MD('CCU', 'Electrocardiographs (ECG)',  'Fukuda', 'FX-8222')
  create_MD('OR', 'Drills, Orthopedic, Electric, Power Unit', 'DeSoutter', 'PS-701')
  create_MD('Store', 'Monitors, Physiologic', 'GE', 'Dash 4000')
  create_MD('OR', 'Circulatory Assist Heart-Lung Bypass units', 'Stockert', 'SC System')
  create_MD('OR', 'Anaesthesia Units', 'GE', 'Datex-ohmeda')
  create_MD('Laboratory', 'Analyzers, Coagulation, Automated', 'STAGO', 'SCOOMPCA')
  create_MD('CCU', 'Thermometers, Digital', 'Welch Allyn', 'Sure Temp PLUS')
  create_MD('Emergency', 'Sphygmomanometer', 'Riester', 'Big Ben Round')
  create_MD('Emergency', 'Scale, Adult',  'ZT-120', 'NC')
  create_MD('Ambulance', 'Ventilator, Transport',  'PHILIPS', 'triolgy202')
  create_MD('Ambulance', 'Defibrillator, External, Manual',  'BEXEN CARDIO', 'Reanibex 800')
  create_MD('Endoscopy', 'gastroscope',  'Pentax', 'EG-290 KP')
  create_MD('ICU (4)', 'Ventilators, Intensive Care, Adult / Pediatrics', 'GE', 'CARE SCAPE R860 - E-MINIC-00')
  create_MD('Endoscopy', 'Insufflators, Laparoscope', 'olympus', 'UCR')
  create_MD('NICU', 'Incubator, Infant ', 'Atom', 'Air Incui')
  create_MD('NICU', 'Jaundice meter, Non-Invasive', 'Drager', 'JM-105')
  create_MD('OPD', 'Opthalamoscope, Indirect', 'KEELER', 'NC')
  create_MD('OR', 'C-arm', 'Philips', 'Bv-Pulsera')
  create_MD('Cath Lab', 'Radiographic/Fluoroscopic Systems, Angiography (Cath Lab)', 'GE', 'INNOVA')
  create_MD('OPD Cardiac', 'Scanning System, Ultrasound, Cardiac', 'Philips', 'IE33')
  create_MD('Isolation ICU', 'Electrocardiographs (ECG)', 'Fukuda', 'FX-8256')
  create_MD('Physiotherapy', 'Massage Machines, Physical Therapy', 'Sirona', 'Orthophips xg5')
end
