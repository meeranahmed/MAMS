class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email, :role
end
