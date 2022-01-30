export const Reducer = (state, action) => {
  let productIndex = state.cart.findIndex((val) => val.id == action.payload.id)

  //console.log('product index: ', productIndex)

  //console.log(action.payload)

  switch (action.type) {
    case 'ADD_TO_CART':
      let lastTotal = state.total + 1
      let lastTotalCount = state.totalCount + action.payload.price

      const stateCart = [...state.cart]

      let productIndex = stateCart.findIndex(
        (val) => val.id === action.payload.id,
      )

      if (productIndex < 0) {
        // daha once eklenmemistir. O zaman ekleyelim

        stateCart.push(action.payload)
      } else {
        // daha once eklenmistir. quantity i arttıralım
        const updatedItem = {
          ...stateCart[productIndex],
        }

        updatedItem.quantity++

        stateCart[productIndex] = updatedItem
      }

      state = {
        ...state,
        total: lastTotal,
        totalCount: lastTotalCount,
        cart: stateCart,
      }

      console.log('State: ', state)
      return state

    default:
      return state
  }
}
