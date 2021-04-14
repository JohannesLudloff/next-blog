import styles from "../../styles/List.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	return {
		props: {
			users: data,
		},
	};
};

const UserList = ({ users }) => {
	return (
		<div>
			{users &&
				users.map((user) => {
					return (
						<Link href={"/list/" + user.id} key={user.id}>
							<a className={styles.single}>
								<strong>Name: {user.name} </strong>
							</a>
						</Link>
					);
				})}
		</div>
	);
};

export default UserList;
