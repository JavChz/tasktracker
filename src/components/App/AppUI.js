import React, { useContext } from "react";

import { AppContext } from "../AppContext";
import { TimerForm } from "../TimerForm";
import formatHours from "../../libs/formatHours";
import { TaskArchive } from "../TaskArchive";
import { Goals } from "../Goals";
import { GoalsBar } from "../GoalsBar";
import { ToolButtons } from "../ToolsButtons";

function AppUI() {
  const { goalKind, archive, goal, handleGoals, tasks, timerGlobal } =
    useContext(AppContext);
  return (
    <div className="Main">
      <div className="timer">
        <TimerForm />
        <ToolButtons />
      </div>
      <Goals
        goalKind={goalKind}
        goal={goal}
        tasks={tasks}
        handleGoals={handleGoals}
      ></Goals>
      <GoalsBar goal={goal} tasks={tasks}></GoalsBar>
      <h6>
        Total Time: {formatHours(timerGlobal)} | Average{" "}
        {timerGlobal && formatHours(timerGlobal / archive.length)}
      </h6>
      <TaskArchive archive={archive} timerGlobal={timerGlobal}></TaskArchive>
    </div>
  );
}

export { AppUI };
