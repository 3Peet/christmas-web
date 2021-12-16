import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="UTF-8" />
					{/* BOXICONS*/}
					<link
						rel="stylesheet"
						href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
					/>

					{/* FAVICON */}
					<link
						rel="shortcut icon"
						href="images/favicon.png"
						type="image/x-icon"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
