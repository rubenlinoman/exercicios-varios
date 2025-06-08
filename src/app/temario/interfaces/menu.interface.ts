
export interface Menu {
  titulo: string;
  url: string;
  submenu?: Menu[]; // Para los casos en los que necesitamos submenu
}
