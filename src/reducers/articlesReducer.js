const initialState = [{
  id: 1,
  title: "Martine va à la Wild",
  author: "Kandane Apalama",
  price: 50,
  stock: 7,
  quantity: 0,
},
{
  id: 2,
  title: "Harry Tripotteur et la braguette magique",
  author: "Aniya Kouene",
  price: 9,
  stock: 20,
  quantity: 0,
},
{
  id: 3,
  title: "Kaddaric et la Table Ronde",
  author: "Cédric Fieu",
  price: 18,
  stock: 544,
  quantity: 0,
},
{
  id: 4,
  title: "Marina gagne à DotA2 (pour une fois)",
  author: "Marina Delas",
  price: 2,
  stock: 3,
  quantity: 0,
}]

const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      const newAddState = state.map(article => {
        if (article.id === action.id) {
          return {
            ...article,
            stock: article.stock - 1,
            quantity: article.quantity + 1,
          }
        }
        return { ...article }
      });
      return newAddState;
    case 'REMOVE_ARTICLE':
      const newRemoveState = state.map(article => {
        if (article.id === action.id) {
          return {
            ...article,
            stock: article.stock + 1,
            quantity: article.quantity - 1,
          }
        }
        return { ...article }
      });
      return newRemoveState;
    case 'CLEAR_CART':
    return initialState;
    default:
      return state;
  }
}

export default articles;