export interface TypeTask {
  id: string;
  title: string;
  memo: string;
  dueDate: string;
  priority: string;
  estimation: number;
  actualTime: number;
  status: string;
  phase: string;
  completed: boolean;
}

export interface TypeState {
  tasks: TypeTask[];
  numberOfTasks: number;
}
