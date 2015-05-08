class CreateBars < ActiveRecord::Migration
  def change
    create_table :bars do |t|
      t.string :name
      t.string :address
      t.string :suburb
      t.string :state
      t.integer :postcode
      t.string :contact_1
      t.string :contact_2
      t.string :contact_3
      t.string :review
      t.string :lrg_img
      t.string :sml_img
      t.timestamps null: false
    end
  end
end
