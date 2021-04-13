import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<h1 className={styles.title}>Home</h1>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae neque quos mollitia molestias sunt, esse, aut illum eveniet
				beatae similique iusto nobis vel perferendis quisquam autem? Alias, ut labore!
			</p>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae neque quos mollitia molestias sunt, esse, aut illum eveniet
				beatae similique iusto nobis vel perferendis quisquam autem? Alias, ut labore!
			</p>
			<Link href="/list">
				<a className={styles.btn}>List</a>
			</Link>
		</div>
	);
}
