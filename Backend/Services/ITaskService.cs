using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManager.Api.Dtos;

namespace TaskManager.Api.Services
{
    public interface ITaskService
    {
        Task<IEnumerable<TaskReadDto>> GetAllTasksAsync();
        Task<TaskReadDto?> GetTaskByIdAsync(int id);
        Task<TaskReadDto> CreateTaskAsync(TaskCreateDto taskDto);
        Task<TaskReadDto?> UpdateTaskAsync(int id, TaskUpdateDto taskDto);
        Task<bool> DeleteTaskAsync(int id);
    }
}
