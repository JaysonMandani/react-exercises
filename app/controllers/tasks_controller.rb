class TasksController < ApplicationController
  def index
    @presenter = {
      :tasks => Task.all,
      :form => {
        :action => tasks_path,
        :csrf_param => request_forgery_protection_token,
        :csrf_token => form_authenticity_token
      }
    }
  end

  def create
    @task = Task.new(task_params)
    @task.save

    if request.xhr?
      render :json => Task.all
    else
      redirect_to tasks_path
    end
  end

  private

  def task_params
    params.require(:task).permit(:name)
  end
end
