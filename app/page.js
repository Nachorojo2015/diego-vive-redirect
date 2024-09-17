import Image from "next/image";
import styles from "./page.module.css";
import Cover from "./ui/components/Cover/Cover";

export default function Home() {
  return (
    <div className={styles.page}>
      <Cover />
    </div>
  );
}
