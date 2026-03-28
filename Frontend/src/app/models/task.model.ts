export interface TaskReadDto {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    isCompleted: boolean;
}

export interface TaskCreateDto {
    title: string;
    description: string;
}

export interface TaskUpdateDto {
    title: string;
    description: string;
    isCompleted: boolean;
}

// Keeping TaskItem for backward compatibility or as an alias
export interface TaskItem extends TaskReadDto {}
