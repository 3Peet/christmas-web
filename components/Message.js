import React from "react";

function Message() {
	return (
		<section className="message section container">
			<div className="message__container grid">
				<form action="" className="message__form">
					<h2 className="message__title">
						Send Good <br /> Wishes!
					</h2>
					<input
						type="text"
						placeholder="Write your message"
						className="message__input"
					/>
					<button className="button message__button">Send Message</button>
				</form>
				<img
					src="images/message.png"
					alt="messageImg"
					className="message__img"
				/>
			</div>
		</section>
	);
}

export default Message;
