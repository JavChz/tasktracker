import { useEffect } from "react";
import { useTaskStore } from "../../store/useTaskStore";
import { Goals } from "../Goals";
import { GoalsBar } from "../GoalsBar";
import { TaskArchive } from "../TaskArchive";
import { TimerForm } from "../TimerForm";
import { ToolsButtons } from "../ToolsButtons";
import { formatHours } from "../../libs/formatHours";
import { downloadCsv } from "../../libs/toCSV";
import { Download } from "lucide-react";

export default function App() {
  const archive = useTaskStore((state) => state.archive);
  const timerGlobal = useTaskStore((state) => state.timerGlobal);
  const updateTimerIfRunning = useTaskStore((state) => state.updateTimerIfRunning);

  // Re-implement the global tick effect in App since Context is gone
  useEffect(() => {
    const interval = setInterval(() => {
      updateTimerIfRunning();
    }, 1000);
    return () => clearInterval(interval);
  }, [updateTimerIfRunning]);

  // Update title
  const timer = useTaskStore((state) => state.timer);
  const tasks = useTaskStore((state) => state.tasks);
  useEffect(() => {
    document.title = `${formatHours(timer)} | Task ${tasks}`;
  }, [timer, tasks]);

  const handleDownload = () => {
    downloadCsv(archive);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-12 px-4 md:px-8">
      <div className="w-full max-w-3xl flex flex-col gap-8">

        {/* Header / Timer section */}
        <div className="bg-surface/60 backdrop-blur-md rounded-3xl p-8 border border-border shadow-2xl flex flex-col items-center gap-6">
          <TimerForm />
          <ToolsButtons />
        </div>

        {/* Goals section */}
        <div className="bg-surface/40 backdrop-blur-md rounded-2xl p-6 border border-border/50 shadow-lg">
          <Goals />
          <GoalsBar />
        </div>

        {/* Stats & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-surface/40 backdrop-blur-md rounded-2xl p-6 border border-border/50 shadow-lg gap-4">
          <div className="text-text-secondary text-sm md:text-base font-medium flex flex-col">
            <span className="text-primary text-lg font-bold">Total Time: {formatHours(timerGlobal)}</span>
            <span>Average: {archive.length > 0 ? formatHours(timerGlobal / archive.length) : "00:00:00"}</span>
          </div>

          <button
            onClick={handleDownload}
            disabled={archive.length === 0}
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent/20 hover:bg-accent/40 text-accent font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] shadow-accent/20"
          >
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            <span>Export CSV</span>
          </button>
        </div>

        {/* Archive */}
        <div className="bg-surface/40 backdrop-blur-md rounded-2xl p-6 border border-border/50 shadow-lg flex flex-col">
          <TaskArchive />
        </div>

      </div>
    </div>
  );
}
