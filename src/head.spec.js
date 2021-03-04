const head = require('./head');

describe('Head',() => {

    it('Head of list [1,2,3,4] is 1',() => {
        expect(head([1,2,3,4])).toEqual(1);
    })

    it('Head of empty list is null',() => {
        expect(head([])).toEqual(null);
    })
})