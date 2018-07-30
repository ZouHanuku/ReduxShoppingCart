import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeArticle, clearCart } from '../actions';

const Cart = ({ articles, removeArticle, clearCart }) => {
  return (
    <div className="Cart">
      <h2>This is your cart</h2>
      <ul>
        {
          articles.map(article => {
            return (
              article.quantity > 0
                ? <li key={article.id}>
                  Title : {article.title}
                  <br />
                  Auteur : {article.author}
                  <br />
                  Prix : {article.price} €
                  <br />
                  Quantity : {article.quantity}
                  <br />
                  <button
                    onClick={() => removeArticle(article, article.id)}
                  >Supprimer</button>
                </li>
                :
                <div></div>
            )
          })
        }
      </ul>
      <div className="total">
      Total : {articles.map( article => article.price * article.quantity).reduce((a, b) => a+b)} €
      </div>
      <button
      onClick={() => clearCart()}
      >Vider le panier </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  articles: state.articles
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeArticle, clearCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);