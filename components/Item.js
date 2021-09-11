import PropTypes from "prop-types";
import styles from "./styles/Item.module.scss";

const Item = ({ name, picture, price, description, currency }) => {
  return (
    <article id={styles.item_container}>
      <figure>
        <img
          id={styles.item_image}
          src={"http://localhost:1337" + picture}
          alt=""
        ></img>
        <figcaption id={styles.item_title}>{name}</figcaption>
      </figure>
      <p id={styles.item_description}>{description}</p>
      <p id={styles.item_price}>{currency + price}</p>
    </article>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;
