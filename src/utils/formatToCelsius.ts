export function formatDegraus(graus: number) {
  const toDegraus = parseInt(String(graus - 275), 10);

  return toDegraus.toString();
}
