import styles from "./styles/About.module.scss";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const About = (props) => {
  return (
    <main id={styles.about_container}>
      <h1 id={styles.about_title}>{"About " + props.restaurantTitle}</h1>
      <article id={styles.about_article}>
        <figure>
          <Image
            width="400"
            height="500"
            src={"http://localhost:1337" + props.image}
            alt=""
          />
        </figure>
        <section id={styles.about_description}>
          <h2>{props.restaurantStoryTitle}</h2>
          <MDXRemote {...props.restaurantStory} />
        </section>
      </article>
      <footer id={styles.about_contact}>
        <section id={styles.email_phone}>
          <p>{props.email}</p>
          <p>{props.phone}</p>
        </section>
        <address>{props.address}</address>
      </footer>
    </main>
  );
};

export async function getStaticProps(context) {
  const result = await fetch("http://localhost:1337/about");
  const data = await result.json();

  if (!data) {
    return {
      props: {
        error: true,
      },
      revalidate: 600, //revalidate every 10 minutes max
    };
  }

  const restaurantTitle = data.RestaurantTitle;
  const restaurantStoryTitle = data.StoryTitle;
  const restaurantStory = await serialize(data.Story);
  const image = data.Image.url;
  const phone = data.Phone;
  const email = data.Email;
  const address = data.Address;

  return {
    props: {
      restaurantTitle,
      restaurantStoryTitle,
      restaurantStory,
      image,
      phone,
      email,
      address,
    },
    revalidate: 600, //revalidate every 10 minutes max
  };
}

export default About;
