import { extendObservable } from "mobx";

class DataStorage {
  constructor() {
    extendObservable(this, {
      catPersonId: 0,
      selectedCatPerson: 0,
      catPersons: [],
    });
  }
}

export default new DataStorage();
