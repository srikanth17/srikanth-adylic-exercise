export class Tracker {
    constructor() {
        this.arr = [];
    }

    setValue(value) {
        this.arr = [...this.arr, value];
    }

    getMin() {
        return Math.min(...this.arr);
    }

    getMax() {
        return Math.max(...this.arr);
    }

    getMean() {
        return this.arr.reduce((a, b) => a + b, 0) / this.arr.length;
    }

    getMode() {
        var numMapping = {};
        var greatestFreq = 0;
        var mode;
        this.arr.forEach(number => {
            numMapping[number] = (numMapping[number] || 0) + 1;

            if (greatestFreq < numMapping[number]) {
                greatestFreq = numMapping[number];
                mode = number;
            }
        });
        return +mode;
    }
}