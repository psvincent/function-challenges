const Constants = require('./constants');
const ordersFilter = require('./ordersFilter');
const ordersMultiplier = require('./ordersMultiplier');
const addShipping = require('./addShipping');

const workflow = (orders) => {
    const ordersOne = ordersFilter(Constants.ORDER_MINIMUM, orders);
    const ordersTwo = ordersMultiplier(Constants.MULTIPLIER, ordersOne);
    const ordersThree = addShipping(Constants.SHIPPING, ordersTwo);
    return ordersThree;
}

module.exports = workflow;