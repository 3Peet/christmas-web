import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination} from "swiper";

SwiperCore.use([Pagination]);

function New() {
	return (
		<section className="new section container" id="new">
			<h2 className="section__title">New Gifts</h2>

			<div className="new__container">
				<Swiper
					slidesPerView={"auto"}
					loop={true}
					centeredSlides={true}
					spaceBetween={24}
					pagination={{
						dynamicBullets: true,
						clickable: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					<SwiperSlide>
						<article className="new__card">
							<div className="new__overlay"></div>
							<img src="images/new1.png" alt="new1" className="new__img" />
							<h3 className="new__price">$95</h3>
							<span className="new__title">Reindeer</span>
							<button className="button new__button">
								<i className="bx bx-heart new__icon"></i>
							</button>
						</article>
					</SwiperSlide>

					<SwiperSlide>
						<article className="new__card">
							<div className="new__overlay"></div>
							<img src="images/new2.png" alt="new2" className="new__img" />
							<h3 className="new__price">$20</h3>
							<span className="new__title">Snow Globe</span>
							<button className="button new__button">
								<i className="bx bx-heart new__icon"></i>
							</button>
						</article>
					</SwiperSlide>
					<SwiperSlide>
						<article className="new__card">
							<div className="new__overlay"></div>
							<img src="images/new3.png" alt="new3" className="new__img" />
							<h3 className="new__price">$75</h3>
							<span className="new__title">Sledge</span>
							<button className="button new__button">
								<i className="bx bx-heart new__icon"></i>
							</button>
						</article>
					</SwiperSlide>
					<SwiperSlide>
						<article className="new__card">
							<div className="new__overlay"></div>
							<img src="images/new4.png" alt="new4" className="new__img" />
							<h3 className="new__price">$15</h3>
							<span className="new__title">Christmas Wreath</span>
							<button className="button new__button">
								<i className="bx bx-heart new__icon"></i>
							</button>
						</article>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}

export default New;
