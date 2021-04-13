import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav>
			<Link href="/">
				<a className="logo">
					<Image src="/logo.png" width={100} height={100} />
				</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/list">
				<a>List</a>
			</Link>
		</nav>
	);
};

export default Navbar;
