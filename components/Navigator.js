import styles from "./styles/Navigator.module.scss";

const Navigator = (props) => {
  return (
    <nav id={styles.nav}>
      <button className={"material-icons " + styles.bare_button}>home</button>
      <button className={"material-icons " + styles.bare_button}>
        restaurant_menu
      </button>
      <button className={"material-icons " + styles.bare_button}>info</button>
      <button
        className={"material-icons " + styles.bare_button}
        id={styles.burger_menu}
      >
        menu
      </button>
    </nav>
  );
};

export default Navigator;
