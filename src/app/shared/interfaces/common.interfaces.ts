export type severity =
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | null
  | undefined;

export interface IBadgeTypes {
  [key: string]: severity;
}
