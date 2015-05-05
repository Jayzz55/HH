class BarSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :suburb, :state, :postcode, :contact_1, :contact_2, :contact_3, :review
  has_many :specials
end
