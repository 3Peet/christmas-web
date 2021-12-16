import React, {useState, useEffect} from "react";

function Header() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(true);
	const closeMobileMenu = () => setClick(false);

	const [showNavShadow, SetshowNavShadow] = useState(false);
	const controlNavbar = () => {
		window.scrollY >= 50 ? SetshowNavShadow(true) : SetshowNavShadow(false);
	};
	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, []);

	return (
		<header
			className={showNavShadow ? "header scroll-header" : "header"}
			id="header"
		>
			<nav className="nav container">
				<a href="#" className="nav__logo">
					<img src="/images/logo.png" alt="logoNav" className="nav__logo-img" />
					Christmas
				</a>

				<div
					className={click ? "nav__menu show-menu" : "nav__menu"}
					id="nav-menu"
				>
					<ul className="nav__list">
						<li className="nav__item">
							<a href="#home" className="nav__link" onClick={closeMobileMenu}>
								Home
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#celebrate"
								className="nav__link"
								onClick={closeMobileMenu}
							>
								Celebrate
							</a>
						</li>
						<li className="nav__item">
							<a href="#gifts" className="nav__link" onClick={closeMobileMenu}>
								Gifts
							</a>
						</li>
						<li className="nav__item">
							<a href="#new" className="nav__link" onClick={closeMobileMenu}>
								New
							</a>
						</li>
					</ul>
					<div className="nav__close" id="nav-close">
						<i className="bx bx-x" onClick={closeMobileMenu}></i>
					</div>

					<img
						src="images/nav-light.png"
						alt="nav-light"
						className="nav__img"
					/>
				</div>

				<div className="nav__btns">
					{/* Theme change button */}
					{/* <i className="bx bx-moon change-theme" id="theme-button"></i> */}
					{/* Toggle button */}
					<div className="nav__toggle" id="nav-toggle">
						<i className="bx bx-grid-alt" onClick={handleClick}></i>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
