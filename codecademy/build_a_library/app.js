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
    if (rating >= 1 && rating <= 5) {
      this.ratings.push(rating);
    }
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
  constructor(year, title, songTitles, runTime) {
    super(title);
    this._year = year;
    this._songTitles = [];
    this._runTime = runTime;
  }

  // Getters
  get year() {
    return this._year;
  }

  get songTitles() {
    return this._songTitles;
  }

  get runTime() {
    return this._runTime;
  }

  // Methods
  addSongs(song) {
    this.songTitles.push(song);
  }

  shuffle() {
    let songs = this._songTitles;
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

// CD
const music311 = new CD(1993, "Music", 63);

music311.addSongs("Freak Out");
console.log(music311.songTitles); // [ 'Freak Out' ]
music311.addSongs("Welcome");
console.log(music311.songTitles); // [ 'Freak Out', 'Welcome' ]

console.log(music311.title); // Music

music311.addRating(8);
music311.addRating(4);
music311.addRating(5);
music311.addRating(3);
console.log(music311.ratings); // [ 4, 5, 3 ]
