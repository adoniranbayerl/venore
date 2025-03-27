export interface NotificationTypes {
  id: string;
  type: string;
  title: string;
  message: string;
  icon: string | null;
  route: string | null;
  awareness: number;
  buttons: unknown;
  active: boolean;
}
