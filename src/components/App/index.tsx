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
import { Button } from "../ui/Button";

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
    document.title = `${formatHours(timer)} | Task ${tasks + 1} | TaskTracker`;
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

          <Button
            variant="ghost"
            onClick={handleDownload}
            disabled={archive.length === 0}
            className="px-6 py-3 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 hover:border-accent/40 group"
            icon={<Download size={20} className="group-hover:-translate-y-1 transition-transform" />}
          >
            Export CSV
          </Button>
        </div>

        {/* Archive */}
        <div className="bg-surface/40 backdrop-blur-md rounded-2xl p-6 border border-border/50 shadow-lg flex flex-col">
          <TaskArchive />
        </div>

      </div>
    </div>
  );
}
