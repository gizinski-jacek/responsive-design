import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
	return (
		<section className='work-with-us'>
			<div className='work-with-us-top'>
				<div className='work-with-us-text'>
					<h3>REACH YOUR GOALS</h3>
					<h2>Work with us</h2>
					<p>
						TNW takes center stage in the tech industry, offering creative media
						campaigns, sizzling tech events, bespoke innovation programs, and
						prime office locations in Amsterdam. Want to engage your audience
						more effectively, innovate your business, and position your brand in
						front of a digital-savvy audience?
					</p>
					<button type='button'>GET IN TOUCH</button>
				</div>
				<div className='work-with-us-images'>
					<div>
						<img
							src='https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/visuals/pillar-media.svg'
							alt='Media'
						/>
						<h3>Media</h3>
					</div>
					<div>
						<img
							src='https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/companies/pillar-events.svg'
							alt='Events'
						/>
						<h3>Events</h3>
					</div>
					<div>
						<img
							src='https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/visuals/pillar-spaces.svg'
							alt='Spaces'
						/>
						<h3>Spaces</h3>
					</div>
					<div>
						<img
							src='https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/visuals/pillar-media.svg'
							alt='Media'
						/>
						<h3>Programs</h3>
					</div>
				</div>
			</div>
			<div className='work-with-us-bottom'>
				<ul className='sponsors'>
					<li>
						<Link to='/'>
							<img
								src='https://next.tnwcdn.com/assets/next/img/partners/google.svg'
								alt='Google logo'
							/>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<img
								src='https://next.tnwcdn.com/assets/next/img/partners/etoro.svg'
								alt='Etoro logo'
							/>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<img
								src='https://next.tnwcdn.com/assets/next/img/partners/ibm.svg'
								alt='IBM logo'
							/>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<img
								src='https://next.tnwcdn.com/assets/next/img/partners/microsoft.svg'
								alt='Microsoft logo'
							/>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<img
								src='https://next.tnwcdn.com/assets/next/img/partners/paypal.svg'
								alt='PayPal logo'
							/>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<img
								src='https://next.tnwcdn.com/assets/next/img/partners/vodafone.svg'
								alt='Vodafone logo'
							/>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<img
								src='https://next.tnwcdn.com/assets/next/img/partners/accenture.svg'
								alt='Accenture logo'
							/>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<img
								src='https://next.tnwcdn.com/assets/next/img/partners/mckinsey-company.svg'
								alt={'McKinsey&Company logo'}
							/>
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Work;
