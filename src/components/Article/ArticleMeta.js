import ArticleActions from './ArticleActions';
import { Link } from 'react-router-dom';
import React from 'react';

const defaultAvatar = username => {
  const n = username || '?';
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(n)}&size=64&background=7a6352&color=fdf8f0&bold=true`;
};

const ArticleMeta = props => {
  const article = props.article;
  const onAvatarError = e => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = defaultAvatar(article.author.username);
  };
  return (
    <div className="article-meta">
      <Link to={`/@${article.author.username}`}>
        <img
          src={article.author.image || defaultAvatar(article.author.username)}
          alt={article.author.username}
          onError={onAvatarError}
        />
      </Link>

      <div className="info">
        <Link to={`/@${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>

      <ArticleActions canModify={props.canModify} article={article} />
    </div>
  );
};

export default ArticleMeta;
