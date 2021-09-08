import { useEffect, useState } from "react";
import Category from "../components/Category";
import Item from "../components/Item";

const Menu = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(
    () => {
      fetch("http://localhost:1337/menus")
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            console.log("Response is: ");
            console.log(result);
            const categoryElements = prepareCategoryElements(result);
            setCategories(categoryElements);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    },
    [] /*Empty dependency array means, run only once as in with componentDidMount*/
  );

  const prepareCategoryElements = (result) => {
    const categoryElements = [];
    for (let i = 0; i < result.length; i++) {
      const category = result[i];
      const itemOrItems = category.hasOwnProperty("item") ? "item" : "items";
      const items = [];
      const extracted = category[itemOrItems];
      if (extracted == null || extracted.length === 0) {
        continue;
      }
      if (itemOrItems == "item") {
        items.push(extracted);
      } else {
        for (const item in extracted) {
          console.log(extracted[item]);
          items.push(extracted[item]);
        }
      }
      //console.log(items);
      const currentElement = (
        <Category key={category.id} name={category.category} items={items} />
      );
      categoryElements.push(currentElement);
    }
    return categoryElements;
  };

  return (
    <main id="menu-container">
      <h1>Menu:</h1>
      {categories}
    </main>
  );
};

export default Menu;
