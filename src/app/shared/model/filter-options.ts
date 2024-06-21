export class FilterOptions {
  dateEnd: Date;
  dateStart: Date;
  limit: number = 16;
  order: string = 'DESC';
  orderBy: string = 'date';
  page: number = 1;
  query?: string;
  type?: string;

  constructor() {
    const today = new Date();
    this.dateStart = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateEnd = new Date(today.getFullYear(), today.getMonth()+1, 0);
  }
}