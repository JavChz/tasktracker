import { useTaskStore } from "../../store/useTaskStore";

export function GoalsBar() {
  const goal = useTaskStore((state) => state.goal);
  const tasks = useTaskStore((state) => state.tasks);

  let progress = (100 / goal) * tasks;
  const overdone = progress >= 100;
  if (overdone) {
    progress = 100;
  }

  return (
    <div className="w-full bg-background/50 rounded-full h-4 border border-border/50 overflow-hidden relative shadow-inner">
      <div
        className={`h-full rounded-full transition-all duration-700 ease-out flex items-center justify-end
          ${overdone 
            ? "bg-gradient-to-r from-accent/80 to-accent shadow-[0_0_15px_rgba(16,185,129,0.8)]" 
            : "bg-gradient-to-r from-primary/50 to-primary shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          }`}
        style={{ width: `${progress}%` }}
      >
        {overdone && (
          <div className="absolute inset-0 bg-white/20 animate-pulse mix-blend-overlay rounded-full"></div>
        )}
      </div>
    </div>
  );
}
