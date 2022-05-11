import React from 'react';
import { Link } from 'react-router-dom';

const Watch = () => {
	return (
		<section className='watch-our-content'>
			<h2>Watch what we made for you</h2>
			<div className='videos-container'>
				<div className='main-video'>
					<div className='video-player-wrapper'>
						<div className='video-player'>
							<iframe
								src={`https://youtube.com/embed/S1-wuoFsdT4`}
								title='YouTube video player'
								frameBorder='0'
								allowFullScreen
							/>
						</div>
					</div>
					<h3>Nothing Ear (1) review: Style… and substance?</h3>
					<span>Jul 30, 2021</span>
				</div>
				<div className='playlist-videos'>
					<div className='playlist-scroll'>
						<div>
							<Link to='/' />
							<img
								src='https://i.ytimg.com/vi/kIie5LVh7NE/hqdefault.jpg'
								alt=''
							/>
							<span>Nothing Ear (1) review: Style… and substance?</span>
						</div>
						<div>
							<Link to='/' />
							<img
								src='https://i.ytimg.com/vi/3Gpmto2eoro/hqdefault.jpg'
								alt=''
							/>
							<span>What size iPad Pro should you buy?</span>
						</div>
						<div>
							<Link to='/' />
							<img
								src='https://i.ytimg.com/vi/UAu4d0K99Vc/hqdefault.jpg'
								alt=''
							/>
							<span>Apple AirTags review: The Find My revolution</span>
						</div>
						<div>
							<Link to='/' />
							<img
								src='https://i.ytimg.com/vi/0OXyJygPSRI/hqdefault.jpg'
								alt=''
							/>
							<span>Sonos Roam review: Smart speaker, smarter business</span>
						</div>
						<div>
							<Link to='/' />
							<img
								src='https://i.ytimg.com/vi/FAx1wjv2jEE/hqdefault.jpg'
								alt=''
							/>
							<span>Learning guitar is better than meditation</span>
						</div>
						<div>
							<Link to='/' />
							<img
								src='https://i.ytimg.com/vi/jAIdYernX0w/hqdefault.jpg'
								alt=''
							/>
							<span>Why your hi-fi setup needs these headphones</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Watch;
