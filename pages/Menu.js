import Category from "../components/Category";
import styles from "./styles/Menu.module.scss";

const Menu = (props) => {
  const prepareCategoryElements = (result) => {
    if (props.error) {
      return;
    }
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

  const normal = (
    <main id={styles.menu_container}>
      <h1 id={styles.menu_title}>Menu:</h1>
      {prepareCategoryElements(props.data)}
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

  return !props.error ? normal : errorCase;
};

export async function getStaticProps(context) {
  const result = await fetch("http://localhost:1337/menus");
  const data = await result.json();
  if (!data) {
    return {
      props: {
        error: true,
      },
      revalidate: 600, //Rebuild the page, at most every 10 minutes
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 600, //Rebuild the page, at most every 10 minutes
  };
}

export default Menu;
