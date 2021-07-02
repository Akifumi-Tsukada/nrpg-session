class CreateCharas < ActiveRecord::Migration[6.0]
  def change
    create_table :charas do |t|
      t.string :name, null: false
      t.string :job
      t.string :magic
      t.integer :hitpoint
      t.integer :attack
      t.integer :defence
      t.integer :escape
      t.references :room, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
