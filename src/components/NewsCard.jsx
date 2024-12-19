/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { saveArticle, unsaveArticle } from "../redux/newsSlice";
import { Link } from "react-router-dom";

import formatDate from "../../public/js/formatDate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

export default function NewsCard({ article, category }) {

  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.news.savedArticles);

  const isSaved = savedArticles.some((saved) => saved._id === article._id);

  const handleSaveClick = () => {
    if (isSaved) {
      dispatch(unsaveArticle(article._id));
    } else {
      dispatch(saveArticle(article));
    }
  }
  
  const approxReadTime = Math.ceil(article.word_count / 200);

  const date = formatDate(article.pub_date.slice(0, 10));

  return (
    <>
      <div className="card rounded-0">
        <img
          src={
            article.multimedia.length > 0
              ? `https://static01.nyt.com/${article.multimedia[0].url}`
              : `https://placehold.co/600x400`
          }
          className="card-img-top img-fluid rounded-0"
          style={{ height: "250px", objectFit: "cover" }}
          alt="News Thumbnail"
        />
        <div className="card-body">
          <div className="pt-2 pb-3 d-flex gap-3 align-items-center">
            <h5 className="card-theme m-0">
              {category ? category : article.section_name}
            </h5>
            <p className="text-muted m-0 pt-1" style={{ fontSize: "14px" }}>
              {date}
            </p>
          </div>
          <div className="pb-2">
            <h3 className="card-title">{article.headline.main}</h3>
          </div>
          <div>
            <p>{article.byline.original}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {approxReadTime !== 0 && (
                <p className="text-muted m-0">
                  {approxReadTime + " min. read"}
                </p>
              )}
            </div>
            <div className="d-flex justify-content-start align-items-center gap-2">
              <Link
                to={article.web_url}
                className="no-link-style"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faNewspaper}
                  style={{ marginRight: "8px", fontSize: "18px", color: "red" }}
                />
              </Link>
              <i onClick={handleSaveClick} className="bookmark-icon">
                <FontAwesomeIcon
                  icon={isSaved ? solidBookmark : regularBookmark}
                  className="bookmark-icon-inner"
                  style={{
                    marginRight: "8px",
                    cursor: "pointer",
                    color: isSaved ? "red" : "inherit",
                  }}
                />
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
