import styles from "./styles/Category.module.scss";
import PropTypes, { object } from "prop-types";
import Item from "./Item";

const Category = ({ name, items }) => {
  const makeItemElements = () => {
    const itemElements = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const currentElement = (
        <Item
          key={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          currency="€"
          picture={item.picture.url}
        />
      );
      itemElements.push(currentElement);
    }
    return itemElements;
  };

  return (
    <section id={styles.category_container}>
      <h2 id={styles.category_title}>{name}</h2>
      <div id={styles.category_items_grid}>{makeItemElements()}</div>
    </section>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(object),
};

export default Category;
