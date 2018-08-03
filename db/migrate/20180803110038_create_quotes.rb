class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.string :text
      t.references :artist, foreign_key: true

      t.timestamps
    end
  end
end
