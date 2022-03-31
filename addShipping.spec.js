const addShipping = require('./addShipping');

describe('addShipping', () => {
    it('for no orders return empty array', () => {
        const updatedOrders = addShipping(10, []);
        expect(updatedOrders).toEqual([]);
    })

    it('for one order, it should add shipping costs to new price', () => {
        const updatedOrders = addShipping(10, [{
            newPrice: 20
        }]);
        expect(updatedOrders).toEqual([{
            newPrice: 30
        }]);
    })

    // it('for one order under the minimum, return an empty array', () => {
    //     const filteredOrders = ordersFilter(10, [{
    //         price: 9
    //     }]);
    //     expect(filteredOrders).toEqual([]);
    // })
})