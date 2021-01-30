export class Book {

  private _id:number = 0;
  constructor(
              private _author: string,
              private _language: string,
              private _bookName: string,
              private _owner: string) {
  }

  get id(): number {
    return this._id;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }

  get bookName(): string {
    return this._bookName;
  }

  set bookName(value: string) {
    this._bookName = value;
  }

  get owner(): string {
    return this._owner;
  }

  set owner(value: string) {
    this._owner = value;
  }
}
