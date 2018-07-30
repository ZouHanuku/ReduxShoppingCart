import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addArticle } from '../actions';

const ListArticles = ({ articles, addArticle }) => {
  return (
    <div className="ListArticles">
      <h2>Welcome to our shop !!!</h2>
      <ul>
        {
          articles.map(article =>
            article.stock === 0
              ? <li
                key={article.id}
              >
                Title : {article.title}
                <br />
                Auteur : {article.author}
                <br />
                Prix : {article.price} €
                <br />
                Stock : Out of stock!
              </li>
              :
              <li
                key={article.id}
              >
                Title : {article.title}
                <br />
                Auteur : {article.author}
                <br />
                Prix : {article.price} €
                <br />
                Stock : {article.stock}
                <br />
                <button
                  onClick={() => addArticle(article, article.id)}
                >Acheter</button>
              </li>
          )
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  articles: state.articles,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addArticle }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ListArticles);