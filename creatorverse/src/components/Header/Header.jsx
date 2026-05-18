// components/Header/Header.jsx
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header({ onViewAllCreators }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewAll = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Go to home page if not there
    } else {
      // if home scroll to creators section
      document.getElementById("creatorCards")?.scrollIntoView({
        behavior: "smooth"
      });
    }

    // refresh data
    if (onViewAllCreators) {
      onViewAllCreators();
    }
  };

  const handleAddCreator = () => {
    navigate("/add-creator");
  };

  return (
    <>
      <div className="header">
        <h1 className="header__title">Creatorverse</h1>

        <nav className="header__nav">
          <div className="header__nav_btns">
            <button
              type="button"
              className="header__nav_btn"
              onClick={handleViewAll}
            >
              VIEW ALL CREATORS
            </button>

            <button
              type="button"
              className="header__nav_btn"
              onClick={handleAddCreator}
            >
              ADD A CREATOR
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
