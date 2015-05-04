class CreateBars < ActiveRecord::Migration
  def change
    create_table :bars do |t|
      t.string :name
      t.integer :street_number
      t.string :street_name
      t.string :street_identifier
      t.string :suburb
      t.string :state
      t.integer :postcode
      t.string :country
      t.string :website
      t.integer :telephone
      t.string :review
      t.timestamps null: false
    end
  end
end
