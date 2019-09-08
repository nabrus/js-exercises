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

  // Setter
  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }
}


