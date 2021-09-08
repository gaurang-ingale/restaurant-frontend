import PropTypes from "prop-types";
const Item = ({ name, picture, price, description, currency }) => {
  return (
    <article id="item-container">
      <figure>
        <img
          id="item-image"
          src={"http://localhost:1337" + picture}
          alt=""
        ></img>
        <figcaption id="item-title">{name}</figcaption>
      </figure>
      <p id="item-description">{description}</p>
      <p id="item-price">{currency + price}</p>
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
