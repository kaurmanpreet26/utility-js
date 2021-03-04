const filter = require('./filter');
const filterUpperCase = (alpha) => {
    return alpha==alpha.toUpperCase()?true:false;
}
describe('Filter',() => {

    it('Filter of [] is []',() => {
        expect(filter([],x => true)).toEqual(expect.arrayContaining([]));
    })

    it('Filter of  [1,2,3]  x=>false is []',() => {
        expect(filter([1,2,3],x => false)).toEqual(expect.arrayContaining([]));
    })

    it('Filter of [1,2,3] x=>true is [1,2,3]',() => {
            expect(filter([1,2,3],x => true)).toEqual(expect.arrayContaining([1,2,3]));
    })

  it('Filter of[1,2,3] x>1 is [2,3]', () => {
        expect(filter([1,2,3],x => x > 1)).toEqual(expect.arrayContaining([2,3]));
    })

  it('Filter of [a,B,c,D] with FilterUppercase is [B,D]' , () => {
        expect(filter(['a','B','c','D'],filterUpperCase)).toEqual(expect.arrayContaining(['B','D']));

  })


})