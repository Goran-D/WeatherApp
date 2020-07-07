class LocStorage {
  constructor() {
    this.home;
    this.work;
    this.defaultHome = 'Varazdin';
    this.defaultWork = 'Zagreb';
  }

  getLocStorage() {
    if(localStorage.getItem('home') === null) {
      this.home = this.defaultHome;
    } else {
      this.home = localStorage.getItem('home');
    }

    if(localStorage.getItem('work') === null) {
      this.work = this.defaultWork;
    } else {
      this.work = localStorage.getItem('work');
    }

    return {
      home: this.home,
      work: this.work
    }
  }

  setLocStorage(home, work) {
    localStorage.setItem('home', home);
    localStorage.setItem('work', work);
  }
}