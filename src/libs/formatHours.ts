export const formatHours = function(time: number): string {
  const measuredTime = new Date(time);
  const MHSTime = measuredTime.toISOString().substring(11, 19);
  return MHSTime;
};

// Remove default export, using named export for better TS consistency.
