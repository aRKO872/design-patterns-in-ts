interface Observer {
  actOnSchoolStatusChange(schoolOpen: boolean): void
}

interface Subject {
  notifyObservers(): void;
  addObservers(o: Observer): void;
  removeObserver(o: Observer): void;
}

export class HeadMaster implements Subject {
  private schoolOpen: boolean
  private observerList: Observer[] = []

  constructor () {
    this.schoolOpen = false
  }

  notifyObservers(): void {
    for (let o of this.observerList) {
      o.actOnSchoolStatusChange(this.schoolOpen)
    }
  }

  addObservers(o: Observer): void {
    this.observerList.push(o)
  }

  removeObserver(o: Observer): void {
    let index = this.observerList.indexOf(o)
    this.observerList.splice(index, 1)
  }

  updateSchoolOpen() {
    this.schoolOpen = !this.schoolOpen
    this.notifyObservers()
  }
}

export class Student implements Observer {
  actOnSchoolStatusChange(schoolOpen: boolean): void {
    if (schoolOpen) {
      console.log('Student : Gosh gotta go to school again, don\'t like the teachers!!');
    } else {
      console.log('Student : Finally a holiday!');
    }
  }
}

export class Staff implements Observer {
  actOnSchoolStatusChange(schoolOpen: boolean): void {
    if (schoolOpen) {
      console.log('Staff : Yes, Will Get to Bash Kids');
    } else {
      console.log('Staff : Gosh Gonna feel bored!');
    }
  }
}