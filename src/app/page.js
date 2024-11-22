import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Volei</h1>
      <Image className={styles.img} src='/images/OIP.jpg' alt='Volei' width={400}  height={400}/>
    </div>
  );
}
