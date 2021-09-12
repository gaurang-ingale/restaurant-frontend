import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function Home(props) {
  return (
    <main id={styles.home_container}>
      <Image
        src={"http://localhost:1337" + props.image}
        height="500"
        width="500"
        alt=""
      />
      <h1 id={styles.home_title}>{props.homeTitle}</h1>
      <MDXRemote {...props.description} />
    </main>
  );
}

export async function getStaticProps(context) {
  const result = await fetch("http://localhost:1337/home");
  const data = await result.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const description = await serialize(data.Description);
  const homeTitle = data.Title;
  const image = data.Photo[0].url;

  return {
    props: {
      image,
      homeTitle,
      description,
    },
    revalidate: 600,
  };
}
