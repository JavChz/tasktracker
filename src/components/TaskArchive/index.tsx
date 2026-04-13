import { SingleTask } from "../SingleTask";
import { useTaskStore } from "../../store/useTaskStore";

export function TaskArchive() {
  const archive = useTaskStore((state) => state.archive);

  if (archive.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-text-tertiary">
        <p className="text-lg">No tasks archived yet.</p>
        <p className="text-sm">Finish a task to see it here.</p>
      </div>
    );
  }

  return (
    <div className="w-full mt-4">
      <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center justify-between">
        <span>History</span>
        <span className="text-sm font-normal text-text-secondary bg-background/50 px-3 py-1 rounded-full border border-border/50">
          {archive.length} Tasks
        </span>
      </h3>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/50 text-text-tertiary text-sm uppercase tracking-wider">
              <th className="py-4 px-4 font-semibold w-16">#</th>
              <th className="py-4 px-4 font-semibold">Task Name</th>
              <th className="py-4 px-4 font-semibold w-32">Duration</th>
              <th className="py-4 px-4 font-semibold w-40 text-right">Ended At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {archive
              .slice()
              .reverse()
              .map((singleTask) => (
                <SingleTask task={singleTask} key={singleTask.endAt + singleTask.id} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
