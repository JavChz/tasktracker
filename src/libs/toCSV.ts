// Function to convert JSON to CSV
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonToCsv(jsonObject: any[]): string {
  if (jsonObject.length === 0) return "";
  const header = Object.keys(jsonObject[0]);
  const rows = jsonObject.map((obj) => header.map((key) => obj[key]));
  const csvContent = [header, ...rows].map((e) => e.join(",")).join("\n");
  return csvContent;
}

// Function to download CSV file
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function downloadCsv(jsonObject: any[], fileName = "data.csv"): void {
  if (jsonObject.length === 0) return;
  const csvContent = jsonToCsv(jsonObject);
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
