const cart = (state = null, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return action.article;
    // changer qtt, stock
    case 'REMOVE_ARTICLE':
      return action.article;
    // changer qtt, stock
    default:
      return state;
  }
}

export default cart;