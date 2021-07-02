class Chara < ApplicationRecord
  belongs_to :user
  belongs_to :room, dependent: :destroy
  has_one_attached :image

  validates :name, presence: true
end
