class TasksController < ApplicationController
  def index
    @tasks = Task.all.to_json
  end

  def create
    @task = Task.new(task_params)
    @task.save

    if request.xhr?
      render :json => @task
    else
      redirect_to tasks_path
    end
  end

  private

  def task_params
    params.require(:task).permit(:name)
  end
end
