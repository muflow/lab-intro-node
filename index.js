class SortedList {
  //constructor() {}
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  //add(item) {}
  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a-b)
    this.length = this.items.length;
  }

  // get(pos) {}
  get(pos) {
    if(this.items[pos]){
      return this.items[pos];
    }else{
      throw new Error('Out of Bounds');
    }
  }

  // max() {}
  max() {
    if(this.items.length === 0){
      throw new Error('Empty Sorted List');
    }else return this.items[this.items.length - 1];
  }

  // min() {}
  min() {
    if(this.items.length ===0 ){
      throw new Error('Empty Sorted List');
    }else{
      return this.items[0];
    }
  }

  // sum() {}
  sum() {
   return this.items.reduce((acc, element) => acc+ element, 0 )

  }

  // avg() {}
  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    }
    return this.sum() / this.items.length
  }
}

module.exports = SortedList;
