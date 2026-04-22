import { Link } from 'react-router-dom';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE } from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({ type: DELETE_ARTICLE, payload })
});

const ArticleActions = props => {
  const article = props.article;
  const del = () => {
    props.onClickDelete(agent.Articles.del(article.slug))
  };
  if (props.canModify) {
    return (
      <span className="article-meta__actions">
        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-sm article-meta__action-btn">
          <i className="ion-edit"></i> Edit Article
        </Link>

        <button
          type="button"
          className="btn btn-sm article-meta__action-btn article-meta__action-btn--danger"
          onClick={del}>
          <i className="ion-trash-a"></i> Delete Article
        </button>
      </span>
    );
  }

  return (
    <span>
    </span>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
