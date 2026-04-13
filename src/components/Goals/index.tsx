import { useTaskStore } from "../../store/useTaskStore";
import { Target } from "lucide-react";

export function Goals() {
  const goal = useTaskStore((state) => state.goal);
  const setGoal = useTaskStore((state) => state.setGoal);
  const tasks = useTaskStore((state) => state.tasks);

  // Use tasks - 1 because 'tasks' represents the *next* task ID to be completed.
  // Wait, let's keep original math: it was (100 / goal) * tasks.
  // If tasks = 1 (init default), progress = 10%. We might want tasks - 1. 
  // We'll stick to original logic to not break parity, but tasks-1 makes more sense if task is current.
  // Actually, wait, original: let progress = (100 / goal) * tasks;
  const progress = (100 / goal) * tasks;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Target className="text-primary" size={24} />
        </div>
        <div>
          <h4 className="text-text-primary font-bold text-lg">Goal Progress</h4>
          <p className="text-text-secondary text-sm">Targeting {goal} Tasks</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-background/50 py-2 px-4 rounded-xl border border-border/50">
        <span className="text-primary font-bold">{progress.toFixed(1)}%</span>
        <span className="text-text-tertiary hidden sm:inline">|</span>
        <div className="flex items-center gap-2">
          <span className="text-text-primary font-medium">{tasks}</span>
          <span className="text-text-tertiary text-sm">of</span>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            placeholder="No. of Goals"
            className="bg-transparent text-text-primary font-bold border-b border-border/50 focus:border-primary outline-none text-center"
            style={{ width: `${Math.max(3, String(goal).length + 2)}ch` }}
            min="1"
          />
        </div>
      </div>
    </div>
  );
}
