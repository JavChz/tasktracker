import { useTaskStore } from "../../store/useTaskStore";
import { formatHours } from "../../libs/formatHours";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";

export function TimerForm() {
  const nameTask = useTaskStore((state) => state.nameTask);
  const setNameTask = useTaskStore((state) => state.setNameTask);
  const tasks = useTaskStore((state) => state.tasks);
  const setTasks = useTaskStore((state) => state.setTasks);
  const timer = useTaskStore((state) => state.timer);
  const pause = useTaskStore((state) => state.pause);
  const startTask = useTaskStore((state) => state.startTask);

  return (
    <div className="flex flex-col items-center w-full gap-6">
      <div className="w-full grid border border-border/50 bg-background/50 rounded-2xl grid-cols-1 sm:grid-cols-[1fr_auto] shadow-inner divide-y sm:divide-y-0 sm:divide-x divide-border/50">
        <input
          type="text"
          value={nameTask}
          onChange={(e) => setNameTask(e.target.value)}
          placeholder="What are you working on?"
          className="bg-transparent border-none outline-none text-xl p-6 text-text-primary placeholder-text-tertiary focus:ring-0 min-w-0"
        />
        <div className="flex items-center px-6 py-4 md:py-0">
          <span className="text-text-secondary mr-2 text-sm font-semibold tracking-wider uppercase whitespace-nowrap">Task #</span>
          <input
            type="number"
            value={tasks + 1}
            onChange={(e) => setTasks(Math.max(1, Number(e.target.value)) - 1)}
            min="1"
            className="bg-transparent text-xl font-bold text-primary outline-none"
            style={{ width: `${Math.max(3, String(tasks + 1).length + 2)}ch` }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 my-2">
        <h3 className="text-text-tertiary font-medium tracking-widest uppercase text-sm">Time in current task</h3>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-text-primary drop-shadow-md">
          {formatHours(timer)}
        </h2>
      </div>

      <Button
        variant="primary"
        size="lg"
        onClick={() => startTask()}
        disabled={pause}
        fullWidth
        className="md:w-auto overflow-hidden group"
        icon={<CheckCircle2 className="relative z-10" />}
      >
        <span className="relative z-10 tracking-wide">Finish Current Task</span>
      </Button>
    </div>
  );
}
