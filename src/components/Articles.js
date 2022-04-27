import React from 'react';

const Articles = () => {
	return (
		<section className='main-articles'>
			<div className='top'>
				<h1>TNW</h1>
				<h2>The heart of tech</h2>
			</div>
			<div className='main-grid-articles'>
				<a href='https://thenextweb.com/news/youtube-hiding-dislike-counts-will-comfort-creators-to-viewers-detriment'>
					<img
						src='https://img-cdn.tnwcdn.com/image?fit=600%2C300&url=https%3A%2F%2Fs3.amazonaws.com%2Fevents.tnw%2Fhardfork-2018%2Fuploads%2Fvisuals%2Fyt_2021-11-12-102012_snnq.jpeg&signature=a7e0b3d6f685bc1af621a7f546a649fe'
						alt=''
					/>
					<span>
						<h4>DISLIKE</h4>
						<h3>YouTube hiding dislike counts is gonna suck for viewers</h3>
					</span>
				</a>
				<a href='https://thenextweb.com/news/hide-the-pain-harold-autumn-stock-photos-meme'>
					<img
						src='https://img-cdn.tnwcdn.com/image?fit=600%2C300&url=https%3A%2F%2Fs3.amazonaws.com%2Fevents.tnw%2Fhardfork-2018%2Fuploads%2Fvisuals%2Fharold.jpeg&signature=4efb668e18eb7a36cedf37519d2219ed'
						alt=''
					/>
					<span>
						<h4>HIDE THE PAIN</h4>
						<h3>
							Harold’s new autumn ‘stock photos’ perfectly capture your dark day
							blues
						</h3>
					</span>
				</a>
				<div>
					<img
						src='https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/visuals/home-header_advert-tnw2021-03.jpg'
						alt=''
					/>
					<span>
						<h3>{`Mark your calendar for June 16 & 17!`}</h3>
						<h3>Join us at TNW Conference 2022</h3>
						<a href='https://thenextweb.com/conference/'>
							<button type='button'>GET TICKETS</button>
						</a>
					</span>
				</div>
				<a href='https://thenextweb.com/news/new-dark-matter-theory-has-a-terrifying-explanation-for-the-universes-expansion'>
					<img
						src='https://img-cdn.tnwcdn.com/image?fit=600%2C300&url=https%3A%2F%2Fs3.amazonaws.com%2Fevents.tnw%2Fhardfork-2018%2Fuploads%2Fvisuals%2Fphysics.jpeg&signature=a4a2b49dfee7f9bded9a378c1f2aa2f6'
						alt=''
					/>
					<span>
						<h4>DARK MATTER</h4>
						<h3>
							New dark matter theory has a terrifying explanation for the
							universe’s expansion
						</h3>
					</span>
				</a>
				<a href='https://thenextweb.com/news/musk-tesla-share-twitter-sec-planned-analysis'>
					<img
						src='https://img-cdn.tnwcdn.com/image?fit=600%2C300&url=https%3A%2F%2Fs3.amazonaws.com%2Fevents.tnw%2Fhardfork-2018%2Fuploads%2Fvisuals%2Ftwitter-elin.jpeg&signature=91ecade18ebd16073e5f75d67402a446'
						alt=''
					/>
					<span>
						<h4>DON'T KID YOURSELF</h4>
						<h3>
							Elon Musk wasn’t actually asking for your opinion on his $5B Tesla
							stock sale
						</h3>
					</span>
				</a>
			</div>
		</section>
	);
};

export default Articles;
