class CreateDataPoints < ActiveRecord::Migration
  def change
    create_table :data_points do |t|
      t.datetime :date
      t.integer :consumption

      t.timestamps null: false
    end
  end
end
