import { useEffect } from "react";
import { fetchArticles } from "../redux/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/NewsCard";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

export default function Search() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  const { query } = useParams();

  useEffect(() => {
    dispatch(fetchArticles({ query }));

  }, [dispatch, query]);
  return (
    <>
      {loading ? (
              <Loader />
            ) : error ? (
              <p className="text-center text-danger">
                Error loading articles: {error}
              </p>
            ) : (
              <div className="row">
                {articles.map((article) => (
                  <div className="col-md-4 p-3 d-flex" key={article._id}>
                    <NewsCard article={article} />
                  </div>
                ))}
              </div>
            )}
    </>
  );
}
