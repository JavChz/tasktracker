import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface TaskArchiveEntry {
  id: number;
  name: string;
  duration: number;
  endAt: number;
}

interface TaskState {
  tasks: number;
  timerGlobal: number;
  archive: TaskArchiveEntry[];
  goal: number;
  goalKind: 'tasks' | 'time' | string;
  
  // Ongoing task state
  nameTask: string;
  last: number;
  pause: boolean;
  timer: number;
  
  // Actions
  setNameTask: (name: string) => void;
  setTasks: (tasks: number) => void;
  setGoal: (goal: number) => void;
  setTimer: (timer: number) => void;
  
  startTask: () => void;
  deleteLastTask: () => void;
  reset: () => void;
  pauseTask: (status: boolean) => void;
  resetCurrent: () => void;
  updateTimerIfRunning: () => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set, get) => ({
      tasks: 0,
      timerGlobal: 0,
      archive: [],
      goal: 10,
      goalKind: 'tasks',
      
      nameTask: '',
      last: Date.now(),
      pause: true,
      timer: 0,
      
      setNameTask: (name) => set({ nameTask: name }),
      setTasks: (tasks) => set({ tasks }),
      setGoal: (goal) => set({ goal }),
      setTimer: (timer) => set({ timer }),
      
      startTask: () => {
        const { tasks, nameTask, timer, archive } = get();
        const entryArchive: TaskArchiveEntry = {
          id: tasks + 1,
          name: nameTask,
          duration: timer,
          endAt: Date.now(),
        };
        
        const newArchive = [...archive, entryArchive];
        const newTimerGlobal = newArchive.reduce((a, b) => a + b.duration, 0);
        
        set({
          archive: newArchive,
          timerGlobal: newTimerGlobal,
          timer: 0,
          last: Date.now(),
          tasks: tasks + 1,
        });
      },
      
      deleteLastTask: () => {
        const { archive, tasks } = get();
        if (archive.length > 1) {
          const tempArchive = [...archive];
          tempArchive.pop();
          const newTimerGlobal = tempArchive.reduce((a, b) => a + b.duration, 0);
          set({
            archive: tempArchive,
            timerGlobal: newTimerGlobal,
            timer: 0,
            tasks: tasks - 1
          });
        } else if (archive.length === 1) {
           set({
            archive: [],
            timerGlobal: 0,
            timer: 0,
            tasks: tasks - 1
          });
        } else {
           set({ timer: 0, tasks: tasks > 0 ? tasks - 1 : 0 });
        }
      },
      
      reset: () => {
        localStorage.clear();
        set({
           archive: [],
           tasks: 0,
           timer: 0,
           pause: true,
           timerGlobal: 0,
           goal: 10,
        });
      },
      
      pauseTask: (status) => {
        set((state) => ({
          last: Date.now(),
          timer: status ? 0 : state.timer,
          pause: status
        }));
      },
      
      resetCurrent: () => {
        set({
          last: Date.now(),
          timer: 0
        });
      },
      
      updateTimerIfRunning: () => {
        const { pause, last } = get();
        if (!pause) {
          set({ timer: Date.now() - last });
        }
      }
    }),
    {
      name: 'task-tracker-storage',
      partialize: (state) => ({
        tasks: state.tasks,
        timerGlobal: state.timerGlobal,
        archive: state.archive,
        goal: state.goal,
      }), // Only persist these fields
    }
  )
);
