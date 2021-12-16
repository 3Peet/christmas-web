import React from "react";

function Giving() {
	return (
		<section className="giving section container">
			<h2 className="section__title">
				Start Giving This <br /> Christmas
			</h2>

			<div className="giving__container grid">
				<div className="giving__content">
					<img src="images/giving1.png" alt="giving1" className="giving__img" />
					<h3 className="giving__title">Surprise gifts</h3>
					<p className="giving__description">
						They are the best gifts there is.
					</p>
				</div>

				<div className="giving__content">
					<img src="images/giving2.png" alt="giving1" className="giving__img" />
					<h3 className="giving__title">Ornaments</h3>
					<p className="giving__description">Give a moment to decorate.</p>
				</div>

				<div className="giving__content">
					<img src="images/giving3.png" alt="giving1" className="giving__img" />
					<h3 className="giving__title">Lots of love</h3>
					<p className="giving__description">
						Give away feelings that last forever.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Giving;
