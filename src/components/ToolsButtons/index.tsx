import { useTaskStore } from "../../store/useTaskStore";
import { Play, Square, RotateCcw, Trash2, Undo2 } from "lucide-react";
import { Button } from "../ui/Button";

export function ToolsButtons() {
  const pauseTask = useTaskStore((state) => state.pauseTask);
  const reset = useTaskStore((state) => state.reset);
  const resetCurrent = useTaskStore((state) => state.resetCurrent);
  const pause = useTaskStore((state) => state.pause);
  const tasks = useTaskStore((state) => state.tasks);
  const deleteLastTask = useTaskStore((state) => state.deleteLastTask);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-full">
      <Button
        variant="secondary"
        onClick={() => deleteLastTask()}
        disabled={tasks <= 1}
        title="Undo last task"
        icon={<Undo2 size={18} className="group-hover:-rotate-45 transition-transform" />}
        className="group"
      >
        <span className="hidden sm:inline">Undo</span>
      </Button>

      {pause ? (
        <Button
          variant="accent"
          onClick={() => pauseTask(false)}
          className="flex-1 md:flex-none py-3"
          icon={<Play size={20} fill="currentColor" />}
        >
          Start Timer
        </Button>
      ) : (
        <Button
          variant="danger"
          onClick={() => pauseTask(true)}
          className="flex-1 md:flex-none py-3"
          icon={<Square size={20} fill="currentColor" />}
        >
          Stop Timer
        </Button>
      )}

      <Button
        variant="secondary"
        onClick={() => resetCurrent()}
        title="Reset current timer"
        icon={<RotateCcw size={18} className="group-hover:-rotate-90 transition-transform" />}
        className="group"
      >
        <span className="hidden sm:inline">Reset Timer</span>
      </Button>

      <Button
        variant="secondary"
        onClick={() => {
          if (window.confirm("Are you sure you want to reset everything?")) {
            reset();
          }
        }}
        title="Hard Reset"
        icon={<Trash2 size={18} className="group-hover:scale-110 transition-transform" />}
        className="group hover:border-danger/30 hover:text-danger hover:bg-danger/10"
      >
        <span className="hidden sm:inline">Hard Reset</span>
      </Button>
    </div>
  );
}
