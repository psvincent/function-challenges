const doubleThePrice = (orders) => {
    return orders.map(order => {
        return {
            ...order, newPrice: order.price * 2
        }
    }) 
}

// This allows us to export the function to other files.
module.exports = doubleThePrice;