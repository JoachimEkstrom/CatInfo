import { extendObservable } from 'mobx'


class DataStorage {

    constructor() {
        extendObservable(this, {
            catPersonId: 0,
            catPersonName: '',
            catPersonColor: '',
            catPersonNumber: 0,
            catPersons: [],
        })
    }
}

export default new DataStorage()