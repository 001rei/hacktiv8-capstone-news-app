import { useSelector } from "react-redux";
import NewsCard from "../components/NewsCard";

export default function Saved() {
  const { savedArticles } = useSelector((state) => state.news);

  return (
    <>
      <div className="row justify-content-center">
        {savedArticles.length === 0 ? (
          <div className="col-3 py-5">
            <p className="text-center fs-3">No saved articles yet.</p>
          </div>
        ) : (
          savedArticles.map((article) => (
            <div className="col-md-4 p-3 d-flex" key={article._id}>
              <NewsCard article={article} />
            </div>
          ))
        )}
      </div>
    </>
  );
}
