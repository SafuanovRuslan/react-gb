import './index.css';
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectArticlesLoading, selectArticlesError, selectArticles } from "../store/news/selectors";
import { getArticles } from "../store/news/actions";

export default function News() {

  const dispatch = useDispatch();
  const loading = useSelector(selectArticlesLoading);
  const error = useSelector(selectArticlesError);
  const articles = useSelector(selectArticles);

  const requestArticles = useCallback(() => {
    dispatch(getArticles());
  }, []);

  useEffect(() => {
    requestArticles();
  }, []);

  if (loading) {
    return (
        <div className='news'>
            <h3>LOADING</h3>
        </div>
    );
  }

  if (error) {
    return (
        <div className='news'>
            <h3>Request error</h3>
            <button onClick={requestArticles}>TRY AGAIN</button>
        </div>
    );
  }

  if (!articles.length) {
    return (
        <div className='news'>
            <h3>No articles</h3>
        </div>
    );
  }

  return (
    <div className='news'>
        <ul>
        {articles.map((a) => (
            <React.Fragment key={a.id}>
            <h3>{a.title}</h3>
            <img src={a.imageUrl} width="100%" alt="illustration"></img>
            <p>{a.summary}</p>
            <p><a href={a.url} target="_blank">Смотреть в источнике</a></p>
            </React.Fragment>
        ))}
        </ul>
    </div>
  );
};