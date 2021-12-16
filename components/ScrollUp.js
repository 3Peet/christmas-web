import React, {useState, useEffect} from "react";

function ScrollUp() {
	const [showScrollUp, SetShowScrollUp] = useState(false);
	const controlScrollUp = () => {
		window.scrollY >= 350 ? SetShowScrollUp(true) : SetShowScrollUp(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", controlScrollUp);
		return () => {
			window.removeEventListener("scroll", controlScrollUp);
		};
	}, []);

	return (
		<div>
			<a
				href="#"
				className={showScrollUp ? "scrollup scrollup-active" : "scrollup"}
				id="scroll-up"
			>
				<i className="bx bx-up-arrow-alt scrollup__icon"></i>
			</a>
		</div>
	);
}

export default ScrollUp;
