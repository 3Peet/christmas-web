import React from "react";

function Gift() {
	return (
		<section className="gift section container" id="gifts">
			<h2 className="section__title">Share A Gift</h2>

			<div className="gift__container grid">
				<article className="gift__card">
					<img src="images/gift1.png" alt="gift1" className="gift__img" />
					<i className="bx bx-heart gift__icon"></i>
					<h3 className="gift__price">$15</h3>
					<span className="gift__title">Gingerbread</span>
				</article>

				<article className="gift__card">
					<img src="images/gift2.png" alt="gift2" className="gift__img" />
					<i className="bx bx-heart gift__icon"></i>
					<h3 className="gift__price">$22</h3>
					<span className="gift__title">Santa Claus Hat</span>
				</article>

				<article className="gift__card">
					<img src="images/gift3.png" alt="gift3" className="gift__img" />
					<i className="bx bx-heart gift__icon"></i>
					<h3 className="gift__price">$48</h3>
					<span className="gift__title">Christmas Tree</span>
				</article>

				<article className="gift__card">
					<img src="images/gift4.png" alt="gift4" className="gift__img" />
					<i className="bx bx-heart gift__icon"></i>
					<h3 className="gift__price">$35</h3>
					<span className="gift__title">Candy Stick</span>
				</article>

				<article className="gift__card">
					<img src="images/gift5.png" alt="gift5" className="gift__img" />
					<i className="bx bx-heart gift__icon"></i>
					<h3 className="gift__price">$12</h3>
					<span className="gift__title">Candy Stick</span>
				</article>
			</div>
		</section>
	);
}

export default Gift;
