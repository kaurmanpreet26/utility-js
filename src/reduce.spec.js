const reduce = require('./reduce');

describe('Reduce',() => {

    it('Reduce of [],(x,y)=>x+y is undefined',() => {
        expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
    })

    it('Reduce of  [] v(x,y) => x+y , 10 is 10',() => {
        expect(reduce([],(x,y) => x+y,10)).toEqual(10);
    })

    it('Reduce of [a,b,c] (x,y)=>x+y is abc',() => {
            expect(reduce(['a','b','c'],(x,y) => x+y)).toEqual('abc');
    })

  it('Reduce of [a,b,c] with (x,y) => x+y , z is zabc', () => {
        expect(reduce(['a','b','c'],(x,y) => x+y,'z')).toEqual('zabc');
    })

})