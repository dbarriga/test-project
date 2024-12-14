
import styles from "./page.module.css";
import Layout from "./Components/Layout/Layout";
import { getJokes } from "../../api/getJokes";

export default async function Home() {
  const jokes = await getJokes();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Layout jokes={jokes} />
      </main>      
    </div>
  );
}
