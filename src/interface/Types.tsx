export interface TypeTask {
  title: string;
  memo: string;
  dueDate: string;
  priority: string;
  estimation: number;
  actualTime: number;
  phase: string;
  completed: boolean;
  update: string;
  uid: string | undefined;
}

export interface TypeDocument {
  id: string;
  task: TypeTask;
}

export interface TypeState {
  documents: TypeDocument[];
  numberOfTasks: number;
}
