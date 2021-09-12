import styles from "./styles/Navigator.module.scss";

const Navigator = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    const links = document.getElementById(styles.links_container);
    if (!links) {
      return;
    }
    if (links.classList.contains(styles.show_links_container)) {
      links.classList.remove(styles.show_links_container);
    } else {
      links.classList.add(styles.show_links_container);
    }
  };

  return (
    <nav id={styles.nav}>
      <button
        className={"material-icons " + styles.bare_button}
        id={styles.burger_menu}
        onClick={handleClick}
      >
        menu
      </button>
      <section
        id={styles.links_container}
        className={styles.responsive_links_container}
      >
        <button className={"material-icons " + styles.bare_button}>home</button>
        <button className={"material-icons " + styles.bare_button}>
          restaurant_menu
        </button>
        <button className={"material-icons " + styles.bare_button}>info</button>
      </section>
    </nav>
  );
};

export default Navigator;
