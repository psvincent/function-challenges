const ordersMultiplier = (multiplier, orders) => {
    return orders.map(order => {
        return {
            ...order, newPrice: order.price * multiplier
        }
    }) 
}

// This allows us to export the function to other files.
module.exports = ordersMultiplier;