import styles from "./Header.module.css";

function NavBar({ filterhandler, clearFilters }) {
  function characterHandler(e) {
    filterhandler(e.target.value);
  }

  return (
    <div className={styles.header}>
      <img
        className={styles.img}
        alt="logo-rickandmorty"
        src={require("../assets/rick&morty-logo.png")}
        onClick={clearFilters}
      />
      <div className={styles.searchContainer}>
        <div className={styles.ico}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <input
          id='input-character'
          className={styles.search}
          type="text"
          placeholder=" search character..."
          onChange={characterHandler}

        />
      </div>
    </div>
  );
}

export default NavBar;
