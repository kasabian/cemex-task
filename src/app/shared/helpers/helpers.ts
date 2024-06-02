export function getCorrectedTimeFrom(data: Date): number {
  return +new Date(data.getFullYear(), data.getMonth(), data.getDate()) - 1;
}

export function getCorrectedTimeTo(date: Date): number {
  date.setDate(date.getDate() + 1);
  return +new Date(date.getFullYear(), date.getMonth(), date.getDate()) - 1;
}
