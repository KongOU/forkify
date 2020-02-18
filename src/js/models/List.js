import uniqid from 'uniqid';

export default class List {
  constructor(params) {
    this.items = [];
  }

  addItem(count, unit, ingredient) {
    const item = {
      count,
      unit,
      ingredient
    };
  }
}
