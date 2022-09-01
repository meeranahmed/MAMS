class MedicalDevicePolicy < ApplicationPolicy
  def index?
    user.admin? or user.nurse? or user.engineer? or user.headEngineer?
  end

  def show?
    user.admin? or user.nurse? or user.engineer? or user.headEngineer?
  end

  def create?
    user.admin? or user.engineer? or user.headEngineer?
  end

  def update?
    user.admin? or user.engineer? or user.headEngineer?
  end

  def destroy?
    user.admin? or user.engineer? or user.headEngineer?
  end
end
