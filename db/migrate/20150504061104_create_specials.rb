class CreateSpecials < ActiveRecord::Migration
  def change
    create_table :specials do |t|
      t.string :special_details
      t.string :rating
      t.string :type
      t.string :rating
      t.time :start
      t.time :end
      t.monday :boolean
      t.tuesday :boolean
      t.wednesday :boolean
      t.thursday :boolean
      t.friday :boolean
      t.saturday :boolean
      t.sunday :boolean
      t.string :day
      t.integer :bar_id
      t.timestamps null: false
    end
  end
end
