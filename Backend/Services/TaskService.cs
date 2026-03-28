using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskManager.Api.Dtos;
using TaskManager.Api.Models;
using TaskManager.Api.Repositories;

namespace TaskManager.Api.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _repository;

        public TaskService(ITaskRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<TaskReadDto>> GetAllTasksAsync()
        {
            var tasks = await _repository.GetAllAsync();
            return tasks.Select(t => MapToReadDto(t));
        }

        public async Task<TaskReadDto?> GetTaskByIdAsync(int id)
        {
            var task = await _repository.GetByIdAsync(id);
            return task != null ? MapToReadDto(task) : null;
        }

        public async Task<TaskReadDto> CreateTaskAsync(TaskCreateDto taskDto)
        {
            var taskItem = new TaskItem
            {
                Title = taskDto.Title,
                Description = taskDto.Description,
                IsCompleted = false,
                CreatedAt = DateTime.UtcNow
            };

            var createdTask = await _repository.AddAsync(taskItem);
            return MapToReadDto(createdTask);
        }

        public async Task<TaskReadDto?> UpdateTaskAsync(int id, TaskUpdateDto taskDto)
        {
            var taskItem = new TaskItem
            {
                Title = taskDto.Title,
                Description = taskDto.Description,
                IsCompleted = taskDto.IsCompleted
            };

            var updatedTask = await _repository.UpdateAsync(id, taskItem);
            return updatedTask != null ? MapToReadDto(updatedTask) : null;
        }

        public async Task<bool> DeleteTaskAsync(int id)
        {
            return await _repository.DeleteAsync(id);
        }

        private static TaskReadDto MapToReadDto(TaskItem task)
        {
            return new TaskReadDto
            {
                Id = task.Id,
                Title = task.Title,
                Description = task.Description,
                CreatedAt = task.CreatedAt,
                IsCompleted = task.IsCompleted
            };
        }
    }
}
