const ordersFilter = require('./ordersFilter');

describe('ordersFilter', () => {
    it('when there are no orders, return an empty array', () => {
        const filteredOrders = ordersFilter(10, []);
        expect(filteredOrders).toEqual([]);
    })

    it('for one order over the minimum, it should return that order', () => {
        const filteredOrders = ordersFilter(10, [{
            price: 20
        }]);
        expect(filteredOrders).toEqual([{
            price: 20
        }]);
    })

    it('for one order under the minimum, return an empty array', () => {
        const filteredOrders = ordersFilter(10, [{
            price: 9
        }]);
        expect(filteredOrders).toEqual([]);
    })
})