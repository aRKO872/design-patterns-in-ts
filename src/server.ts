import { EmployeeFactory } from "./design-patterns/factory";
import { HeadMaster, Staff, Student } from "./design-patterns/observer";
import { DbConnector } from "./design-patterns/singleton";
import { ImplementStrategy, ReverseStrategy, SortingStrategy } from "./design-patterns/strategy";

class TestApp {
  testFactories() {
    const newFactory = new EmployeeFactory();

    console.log(newFactory.create('Arko', 'Engineer').termOut())

    console.log(newFactory.create('Arko', 'Manager').termOut())

    console.log(newFactory.create('Arko', 'CEO').termOut())

    console.log('========================================')
  }

  testSingleton() {
    const new_DB = DbConnector.Instance('DB_URL');
    const duplicate_DB = DbConnector.Instance('NEW_DB_URL');

    console.log(`New DB URL : ${new_DB.getDBString()}
    Duplicate DB URL : ${duplicate_DB.getDBString()}`)

    console.log('========================================')
  }

  testObserver() {
    const student = new Student()
    const staff = new Staff()

    const headMaster = new HeadMaster()
    headMaster.addObservers(student)
    headMaster.addObservers(staff)

    // Opening School
    headMaster.updateSchoolOpen()

    // Closing School
    headMaster.updateSchoolOpen()

    console.log('========================================')
  }

  testStrategy() {
    const arr = [8, 9, 1, 2, 10]
    
    // Creating a Box implement multiple strategies on same array and see the result. 
    // This Breaks down complexities making the code less complicated
    const implementStrategyBox = new ImplementStrategy(new SortingStrategy());

    // passing copy of original array
    implementStrategyBox.implementStrategy([...arr])

    implementStrategyBox.setStrategy(new ReverseStrategy())

    implementStrategyBox.implementStrategy([...arr])

    console.log('========================================')
  }
}


const testApp = new TestApp();

// Testing Factory Design
testApp.testFactories();

// Testing Singleton : 
testApp.testSingleton();

// Testing Observer Pattern :
testApp.testObserver();

//Test Strategy Pattern
testApp.testStrategy()