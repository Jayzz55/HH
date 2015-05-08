# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150504061104) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bars", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.string   "suburb"
    t.string   "state"
    t.integer  "postcode"
    t.string   "contact_1"
    t.string   "contact_2"
    t.string   "contact_3"
    t.string   "review"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "specials", force: :cascade do |t|
    t.string   "special_details"
    t.string   "rating"
    t.string   "type"
    t.datetime "start_time"
    t.datetime "end_time"
    t.boolean  "monday"
    t.boolean  "tuesday"
    t.boolean  "wednesday"
    t.boolean  "thursday"
    t.boolean  "friday"
    t.boolean  "saturday"
    t.boolean  "sunday"
    t.integer  "bar_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
