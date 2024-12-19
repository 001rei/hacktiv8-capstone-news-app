import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={styles.scrollToTopButton}
        className="btn btn-danger"
      >
        ↑
      </button>
    )
  );
};

const styles = {
  scrollToTopButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#e81809",
    border: "none",
    color: "white",
    fontSize: "24px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "0",
  },
};

export default ScrollToTopButton;
