import styles from "./Header.module.css";

function NavBar({ filterhandler }) {

  function characterHandler(e) {
    filterhandler(e.target.value);
  }

  return (
    <div className={styles.header}>
      <img
        className={styles.img}
        alt="logo-rickandmorty"
        src={require("../assets/rick&morty-logo.png")}
      />
      <div className={styles.search}>
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

        <input
          type="text"
          style={{ width: "10vw", marginLeft: "10px" }}
          placeholder="search..."
          onChange={characterHandler}
        />
      </div>
    </div>
  );
}

export default NavBar;
