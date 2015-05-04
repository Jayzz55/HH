class CreateSpecials < ActiveRecord::Migration
  def change
    create_table :specials do |t|
      t.string :special_details
      t.string :rating
      t.string :type
      t.string :rating
      t.datetime :start
      t.datetime :end
      t.integer :bar_id

      t.timestamps null: false
    end
  end
end
