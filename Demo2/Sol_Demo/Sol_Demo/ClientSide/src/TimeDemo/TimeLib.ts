import moment from 'moment';

export default class TimeLib {
    constructor() {
        console.log("Test");
    }

    public OnTest = (): string => {
        return moment().format();
    }
}