import { useEffect } from "react";
import { fetchArticles } from "../redux/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";

export default function Covid() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchArticles({ query: "covid 19" }));
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-center text-danger">
          Error loading articles: {error.message}
        </p>
      ) : (
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-4 p-3 d-flex" key={article._id}>
              <NewsCard article={article} category={"COVID-19"} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
