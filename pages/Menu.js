import { useEffect, useState } from "react";
import Category from "../components/Category";
import styles from "./styles/Menu.module.scss";

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
      if (itemOrItems === "item") {
        items.push(extracted);
      } else {
        for (const item in extracted) {
          items.push(extracted[item]);
        }
      }
      const currentElement = (
        <Category key={category.id} name={category.category} items={items} />
      );
      categoryElements.push(currentElement);
    }
    return categoryElements;
  };

  const loadedAndNoError = (
    <main id={styles.menu_container}>
      <h1 id={styles.menu_title}>Menu:</h1>
      {categories}
    </main>
  );

  const errorCase = (
    <main id={styles.menu_container}>
      <p id={styles.menu_error}>
        Unfortunately there was an error loading the menu from our servers.
        Please try again later. We are terribly sorry for the inconvinience!
      </p>
    </main>
  );

  const loadingCase = (
    <main id={styles.menu_container}>
      <p id={styles.menu_loading}>
        The freshest of our menus is now loading! :)
      </p>
    </main>
  );

  return !isLoaded
    ? loadingCase
    : isLoaded && !error
    ? loadedAndNoError
    : errorCase;
};

export default Menu;
