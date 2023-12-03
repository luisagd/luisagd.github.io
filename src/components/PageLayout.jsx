import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDXProvider } from "@mdx-js/react";
// import Layout from "../../components/PageLayout";
// const Layout = ({ children }) => {
// 	return <main>{children}</main>;
// };
export default function Layout({ children }) {
	return (
		<MDXProvider
			components={{
				p: (props) => <p {...props} className="" />,
				h1: (props) => <h1 {...props} className="text-2xl" />,
			}}
		>
			<div className="min-h-screen flex bg-gray-800 text-white">
				<div className="flex-grow">
					<Navbar />
					<main className="container mx-auto">
						<header className="text-center py-10 ">
							<h1 className="text-4xl">
								{children.props.pageContext.frontmatter.title}
							</h1>
						</header>
						{children}
					</main>
					<Footer />
				</div>
			</div>
		</MDXProvider>
	);
}
