export class FilterOptions {
  orderBy: string = 'ASC';
  filterField: string = 'date';
  query: string = '';
  dateStart: Date;
  dateEnd: Date;

  constructor() {
    const today = new Date();
    this.dateStart = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateEnd = today;
  }
}