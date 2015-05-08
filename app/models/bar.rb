class Bar < ActiveRecord::Base
  has_many :specials, dependent: :destroy

end
