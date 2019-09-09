// PARENT CLASS
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // Getters
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  // Methods
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this.ratings
      .reduce((acc, val) => acc + val, 0);

    return Math.floor(ratingsSum / this.ratings.length);
  }

  addRating(rating) {
    this.ratings.push(rating);
  }

  // Setter
  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }
}


// CHILDREN CLASSES

// BOOK
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  // Getters
  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

// MOVIE
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  // Getters
  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// CD
class CD extends Media {
  constructor(album, title, songTitles, runTime) {
    super(title);
  }
}


// INSTANCES

// book
const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // true

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating()); // 4

// movie
const speed = new Movie("Jan de Bont", "Speed", 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut); // true

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating()); // 2
