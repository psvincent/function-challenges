const workflow = require('./workflow');

const orders = [{
    price: 8
},{
    price: 20
}]

const expectedOrders = [{
    price: 20,
    newPrice: 46.5
}]

describe('workflow', () => {
    it('should do the thing', () => {
        const updatedOrders = workflow(orders);
        expect(updatedOrders).toEqual(expectedOrders);
    })
}) 