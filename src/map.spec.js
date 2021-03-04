const map1 = require('./map');


describe('Map', () => {

    it('Map of [], Cube',() => {
        expect(user.mapFunction([],'cube')).toEqual([]);
    });

    it('Map of [1,2,3] ,Identity',() => {
        expect(user.mapFunction([1,2,3],'identity')).toEqual([1,2,3]);
    });

    it('Map of [1,2,3], Cube',() => {
        expect(user.mapFunction([1,2,3],'cube')).toEqual([1,8,27]);
    });
  it('Map of  [a{x : 10}] with a->a.x+1 is [11]', () => {
        expect(user.mapFunction([{ x : 10}],a => a.x + 1)).toEqual([11]);
    });

})