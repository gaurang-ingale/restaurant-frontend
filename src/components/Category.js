import PropTypes, { object } from "prop-types";
import Item from "./Item";

const Category = ({ name, items }) => {
  const makeItemElements = () => {
    const itemElements = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      console.log(items);
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
    <section id="category-container">
      <h2 id="category-title">{name}</h2>
      {makeItemElements()}
    </section>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(object),
};

export default Category;
