interface IEmp {
  name: string;
  type: string;

  termOut(): string;
}

class Engineer implements IEmp {
  name: string;
  type: string;

  constructor (name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  termOut(): string {
      return `I am an ${this.type} and my name is ${this.name} and I love to code`
  }
}

class Manager implements IEmp {
  name: string;
  type: string;

  constructor (name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  termOut(): string {
      return `I am a ${this.type} and my name is ${this.name} and I love to manage Engineers`
  }
}

class CEO implements IEmp {
  name: string;
  type: string;

  constructor (name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  termOut(): string {
      return `I am a ${this.type} and my name is ${this.name} and I love to manage my company`
  }
}

export class EmployeeFactory {
  create(name: string, type: string): IEmp {
    let out: IEmp;

    switch(type) {
      case 'Manager' : 
        out = new Manager(name, type);
        break;
      case 'CEO' : 
        out = new CEO(name, type);
        break;
      default: 
        out = new Engineer(name, type);
        break;
    } 

    return out;
  }
}