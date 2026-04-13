import { useTaskStore } from "../../store/useTaskStore";
import { Play, Square, RotateCcw, Trash2, Undo2 } from "lucide-react";

export function ToolsButtons() {
  const pauseTask = useTaskStore((state) => state.pauseTask);
  const reset = useTaskStore((state) => state.reset);
  const resetCurrent = useTaskStore((state) => state.resetCurrent);
  const pause = useTaskStore((state) => state.pause);
  const tasks = useTaskStore((state) => state.tasks);
  const deleteLastTask = useTaskStore((state) => state.deleteLastTask);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-full">
      <button
        onClick={() => deleteLastTask()}
        disabled={tasks <= 1}
        className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-surface-hover text-text-secondary hover:text-text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-border"
        title="Undo last task"
      >
        <Undo2 size={18} className="group-hover:-rotate-45 transition-transform" />
        <span className="hidden sm:inline">Undo</span>
      </button>

      {pause ? (
        <button
          onClick={() => pauseTask(false)}
          className="flex flex-1 md:flex-none items-center justify-center gap-2 px-8 py-3 rounded-xl bg-accent text-white font-bold transition-all hover:bg-accent/90 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
        >
          <Play size={20} fill="currentColor" />
          <span>Start Timer</span>
        </button>
      ) : (
        <button
          onClick={() => pauseTask(true)}
          className="flex flex-1 md:flex-none items-center justify-center gap-2 px-8 py-3 rounded-xl bg-danger text-white font-bold transition-all hover:bg-danger/90 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:-translate-y-0.5"
        >
          <Square size={20} fill="currentColor" />
          <span>Stop Timer</span>
        </button>
      )}

      <button
        onClick={() => resetCurrent()}
        className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-surface-hover text-text-secondary hover:text-text-primary transition-all border border-border"
        title="Reset current timer"
      >
        <RotateCcw size={18} className="group-hover:-rotate-90 transition-transform" />
        <span className="hidden sm:inline">Reset Timer</span>
      </button>

      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to reset everything?")) {
            reset();
          }
        }}
        className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-danger/10 text-text-secondary hover:text-danger transition-all border border-border hover:border-danger/30"
        title="Hard Reset"
      >
        <Trash2 size={18} className="group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Hard Reset</span>
      </button>
    </div>
  );
}
