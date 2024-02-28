export class DbConnector {
  private db_string: string
  private static DB_INSTANCE: DbConnector
  private constructor (db_string: string) {
    this.db_string = db_string
  }

  static Instance (db_string: string): DbConnector {
    let flag = true
    if (!this.DB_INSTANCE) {
      this.DB_INSTANCE = new DbConnector(db_string)
      console.log('Implemented Singleton')
      flag = false;
    }

    if (flag) {
      console.log('Singleton already implemented!')
    }

    return this.DB_INSTANCE
  }

  public getDBString (): string {
    return this.db_string
  }
}