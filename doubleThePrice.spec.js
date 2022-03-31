// This pulls the file from the original doubleThePrice file.
const doubleThePrice = require('./doubleThePrice');

// Generally describes the test
describe('doubleThePrice', () => {
    // "it" is what the test is going to be. it describes it more in detail.
    it ('for empty orders, return empty array', () => {
        const modifiedOrders = doubleThePrice([]);
        expect (modifiedOrders).toEqual([]);
    })

    it ('for an order with one element, double that price', () => {
        const modifiedOrders = doubleThePrice([{
            price: 10
        }]);
        expect (modifiedOrders).toEqual([{
            price: 10, 
            newPrice: 20
        }]);
    })

    it ('for an order with two elements, double that price', () => {
        const modifiedOrders = doubleThePrice([{
            price: 10
        }, {
            price: 20
        }]);
        expect (modifiedOrders).toEqual([{
            price: 10, 
            newPrice: 20
        }, {
            price: 20, 
            newPrice: 40
        }]);
    })
})