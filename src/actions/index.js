export const addArticle = (article, id) => ({
  type: 'ADD_ARTICLE',
  article,
  id
})

export const removeArticle = (article, id) => ({
  type: 'REMOVE_ARTICLE',
  article,
  id
})

export const clearCart = () => ({
  type: 'CLEAR_CART'
})

