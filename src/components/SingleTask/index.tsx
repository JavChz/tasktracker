import { formatHours } from "../../libs/formatHours";
import { TaskArchiveEntry } from "../../store/useTaskStore";

interface SingleTaskProps {
  task: TaskArchiveEntry;
}

export function SingleTask({ task }: SingleTaskProps) {
  return (
    <tr className="group hover:bg-surface-hover/50 transition-colors duration-200">
      <td className="py-4 px-4 text-text-secondary font-medium">#{task.id}</td>
      <td className="py-4 px-4 text-text-primary font-medium group-hover:text-primary transition-colors">
        {task.name || <span className="text-text-tertiary italic">Unnamed Task</span>}
      </td>
      <td className="py-4 px-4 text-text-secondary font-mono tracking-tight">
        {formatHours(task.duration)}
      </td>
      <td className="py-4 px-4 text-text-tertiary text-right text-sm">
        {new Date(task.endAt).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </td>
    </tr>
  );
}
