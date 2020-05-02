import { extendObservable } from 'mobx'


class DataStorage {

    constructor() {
        extendObservable(this, {
            catPersonName: '',
            catPersonColor: '',
            catPersonNumber: 0,
            catPersons: [],
        })
    }
}

export default new DataStorage()