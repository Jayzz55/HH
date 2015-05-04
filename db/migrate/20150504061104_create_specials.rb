class CreateSpecials < ActiveRecord::Migration
  def change
    create_table :specials do |t|
      t.string :special_details
      t.string :rating
      t.string :type
      t.string :rating
      t.time :start
      t.time :end
      t.boolean :monday
      t.boolean :tuesday
      t.boolean :wednesday
      t.boolean :thursday
      t.boolean :friday
      t.boolean :saturday
      t.boolean :sunday
      t.string :day
      t.integer :bar_id
      t.timestamps null: false
    end
  end
end
