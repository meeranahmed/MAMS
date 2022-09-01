class UserPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if user.admin?
        scope.all
      else
        scope.where(user_id: user.id)
      end
    end
  end

  def index?
    user.admin?
  end

  def show?
    user.admin? or user.nurse? or user.engineer?
  end

  def create?
    user.admin?
  end

  def update?
    user.admin? or user.nurse? or user.engineer?
  end

  def destroy?
    user.admin?
  end
end
