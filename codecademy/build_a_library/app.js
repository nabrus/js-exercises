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
    } else {
      console.log("Rating system is 1 to 5, please select again.");
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
  constructor(artist, year, title, songTitles, runTime) {
    super(title);
    this._artist = artist;
    this._year = year;
    this._songTitles = songTitles;
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

  shuffle(songTitles) {
    for (let i = this.songTitles.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.songTitles[i];
      this.songTitles[i] = this.songTitles[j];
      this.songTitles[j] = temp;
    }
    return this.songTitles;
  }
}


// CATALOG
class Catalog {
  constructor(myMedia) {
    this._myMedia = [];
  }

  get myMedia() {
    return this._myMedia;
  }

  set myMedia(media) {
    this._myMedia.push(media);
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
const music311 = new CD(311, 1993, "Music", ["Freak Out", "Welcome", "Visit"], 63);

console.log(music311.title); // Music

music311.addRating(8);
// Rating system is 1 to 5, please select again.
music311.addRating(4);
music311.addRating(5);
music311.addRating(3);
console.log(music311.ratings); // [ 4, 5, 3 ]

music311.shuffle();
console.log(music311.songTitles);
music311.shuffle();
console.log(music311.songTitles);
music311.shuffle();
console.log(music311.songTitles);

// Catalog
const myStuff = new Catalog();
myStuff.myMedia = music311;
myStuff.myMedia = speed;
myStuff.myMedia = historyOfEverything;

console.log(myStuff);
/*
Catalog {
  _myMedia: [
    CD {
      _title: 'Music',
      _isCheckedOut: false,
      _ratings: [Array],
      _artist: 311,
      _year: 1993,
      _songTitles: [Array],
      _runTime: 63
    },
    Movie {
      _title: 'Speed',
      _isCheckedOut: true,
      _ratings: [Array],
      _director: 'Jan de Bont',
      _runTime: 116
    },
    Book {
      _title: 'A Short History of Nearly Everything',
      _isCheckedOut: true,
      _ratings: [Array],
      _author: 'Bill Bryson',
      _pages: 544
    }
  ]
}
*/
