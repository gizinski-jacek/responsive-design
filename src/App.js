import { useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import './App.css';

const App = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [noTransition, setNoTransition] = useState(false);

	const slideMenu = () => {
		setShowMenu((prevState) => !prevState);
		const body = document.querySelector('body');
		!showMenu
			? (body.style.overflow = 'hidden')
			: (body.style.overflow = 'unset');
	};

	useEffect(() => {
		const aside = document.querySelector('aside');
		if (aside.offsetWidth < 1024) {
			setNoTransition(false);
		}
		if (aside.offsetWidth >= 1024) {
			setNoTransition(true);
		}
	}, []);

	useEffect(() => {
		const body = document.querySelector('body');
		const watchForResize = () => {
			if (body.offsetWidth < 1012) {
				setTimeout(() => {
					setNoTransition(false);
				}, 400);
			}
			if (body.offsetWidth >= 1012) {
				setNoTransition(true);
			}
			if (body.offsetWidth >= 1024 && showMenu) {
				setShowMenu(false);
			}
		};

		window.addEventListener('resize', watchForResize);

		return () => window.removeEventListener('resize', watchForResize);
	}, [showMenu]);

	return (
		<BrowserRouter>
			<nav className={showMenu ? 'show-menu' : ''}>
				<div>
					<svg
						className='ham-menu'
						focusable='false'
						viewBox='0 0 24 24'
						onClick={slideMenu}
					>
						<path d='M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z'></path>
					</svg>
					<h3>TNW</h3>
				</div>
				<aside style={{ transition: noTransition ? 'none' : '' }}>
					<ul>
						<NavLink exact={true} to='/' activeClassName='active'>
							<li>HOME</li>
						</NavLink>
						<li>NEWS</li>
						<li>EVENTS</li>
						<li>PROGRAMS</li>
						<li>SPACES</li>
						<li>PARTNER WITH US</li>
					</ul>
					<div>
						<ul className='social-media'>
							<li>
								<Link to='/'>
									<svg viewBox='0 0 16 16'>
										<path d='M16,1V15a1.007,1.007,0,0,1-1,1H11V9.78125h2l.33594-2.30469H11V5.66406a.9118.9118,0,0,1,1-1.03125h1.5V2.55469a11.284,11.284,0,0,0-1.64062-.10938c-2.19532,0-3.30469,1.21875-3.30469,3.03907V7.47656h-2V9.78125h2V16H1a1.007,1.007,0,0,1-1-1V1A1.007,1.007,0,0,1,1,0H15A1.007,1.007,0,0,1,16,1Z'></path>
									</svg>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<svg viewBox='0 0 16 16'>
										<path d='M8,1.44144c2.1361,0,2.38911.00815,3.23268.04664a4.42649,4.42649,0,0,1,1.48549.27546A2.47861,2.47861,0,0,1,13.638,2.362a2.47851,2.47851,0,0,1,.59844.91986,4.42673,4.42673,0,0,1,.27546,1.48548c.03849.84358.04664,1.0966.04664,3.23269s-.00815,2.38911-.04664,3.23268a4.42675,4.42675,0,0,1-.27546,1.48549,2.6493,2.6493,0,0,1-1.51829,1.51829,4.42675,4.42675,0,0,1-1.48549.27546c-.84345.03849-1.09644.04664-3.23268.04664s-2.38923-.00815-3.23268-.04664a4.42675,4.42675,0,0,1-1.48549-.27546A2.47849,2.47849,0,0,1,2.362,13.638a2.47863,2.47863,0,0,1-.59844-.91986,4.42647,4.42647,0,0,1-.27546-1.48548C1.44959,10.38911,1.44144,10.1361,1.44144,8s.00815-2.38911.04664-3.23268a4.42649,4.42649,0,0,1,.27546-1.48549A2.47861,2.47861,0,0,1,2.362,2.362a2.47863,2.47863,0,0,1,.91986-.59844,4.42647,4.42647,0,0,1,1.48548-.27546C5.61089,1.44959,5.86391,1.44144,8,1.44144M8,0C5.82733,0,5.55489.0092,4.70161.04813A5.8719,5.8719,0,0,0,2.75969.42a3.92134,3.92134,0,0,0-1.417.92273A3.92134,3.92134,0,0,0,.42,2.75969,5.8719,5.8719,0,0,0,.04813,4.70161C.0092,5.55489,0,5.82732,0,8s.0092,2.4451.04813,3.29839A5.8719,5.8719,0,0,0,.42,13.24031a3.92142,3.92142,0,0,0,.92273,1.417,3.92134,3.92134,0,0,0,1.417.92273,5.8719,5.8719,0,0,0,1.94192.37186C5.55489,15.9908,5.82733,16,8,16s2.4451-.0092,3.29839-.04813A5.8719,5.8719,0,0,0,13.24031,15.58a4.09069,4.09069,0,0,0,2.3397-2.3397,5.8719,5.8719,0,0,0,.37186-1.94192C15.9908,10.4451,16,10.17267,16,8s-.0092-2.44511-.04813-3.29839A5.8719,5.8719,0,0,0,15.58,2.75969a3.92134,3.92134,0,0,0-.92273-1.417A3.92134,3.92134,0,0,0,13.24031.42,5.8719,5.8719,0,0,0,11.29839.04813C10.4451.0092,10.17267,0,8,0Z'></path>
										<path d='M8,3.89189A4.10811,4.10811,0,1,0,12.10811,8,4.10811,4.10811,0,0,0,8,3.89189Zm0,6.77477A2.66667,2.66667,0,1,1,10.66667,8,2.66666,2.66666,0,0,1,8,10.66666Z'></path>
										<circle
											cx='12.27042'
											cy='3.72958'
											r='0.96'
										></circle>
									</svg>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<svg viewBox='0 0 16 16'>
										<path d='M14.36719,4.73438v.42968A9.26817,9.26817,0,0,1,5.03906,14.5,9.21783,9.21783,0,0,1,0,13.16406a5.18177,5.18177,0,0,0,.78125.05469,6.62381,6.62381,0,0,0,4.07031-1.55469A3.27084,3.27084,0,0,1,1.79688,9.38281a3.22534,3.22534,0,0,0,.60937.0625,3.2821,3.2821,0,0,0,.875-.11719A3.27938,3.27938,0,0,1,.64844,6.10938V6.07031a3.29,3.29,0,0,0,1.48437.40625A3.266,3.266,0,0,1,.66406,3.75781a3.12781,3.12781,0,0,1,.44532-1.59375A9.32841,9.32841,0,0,0,7.86719,5.53125a3.4194,3.4194,0,0,1-.07031-.75781A3.26752,3.26752,0,0,1,11.07031,1.5a3.39565,3.39565,0,0,1,2.41407,1.03125,6.58929,6.58929,0,0,0,2.07031-.79687,3.25439,3.25439,0,0,1-1.44531,1.82031A6.402,6.402,0,0,0,16,3.03125,6.64835,6.64835,0,0,1,14.36719,4.73438Z'></path>
									</svg>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<svg viewBox='0 0 16 16'>
										<path d='M16,8c0,5.66406,0,5.66406-8,5.66406S0,13.66406,0,8,0,2.33594,8,2.33594,16,2.33594,16,8ZM11,8,6,5v6Z'></path>
									</svg>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<svg viewBox='0 0 16 16'>
										<path d='M0,0V16H16V0ZM12.8,6.4H9.6V9.6H6.4v3.2H3.2V3.2h9.6Z'></path>
									</svg>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<svg viewBox='0 0 16 16'>
										<path d='M1.11621 4.2666a2.0026 2.0026 0 0 1-.583-.8833v-.7666A.47788.47788 0 0 1 .667 2.2749a.56688.56688 0 0 1 .3164-.1748 49.3662 49.3662 0 0 1 14.0166 0 .57417.57417 0 0 1 .333.1748.482.482 0 0 1 .13379.3418v.7666a2.0026 2.0026 0 0 1-.583.8833L9.2002 8.56689A1.88658 1.88658 0 0 1 8 8.93311a1.88658 1.88658 0 0 1-1.2002-.36622zM10.18359 10l5.28321-4.0498v7.4331a.48117.48117 0 0 1-.13379.3418.57141.57141 0 0 1-.333.1748 48.721 48.721 0 0 1-7 .5 49.29676 49.29676 0 0 1-7.0166-.5.564.564 0 0 1-.31641-.1748.47707.47707 0 0 1-.13379-.3418V5.9502L5.81641 10A3.5224 3.5224 0 0 0 8 10.6665 3.5224 3.5224 0 0 0 10.18359 10z'></path>
									</svg>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<svg viewBox='0 0 16 16'>
										<path d='M14.81635,0H1.18015A1.16757,1.16757,0,0,0,0,1.15365V14.84546A1.16833,1.16833,0,0,0,1.18015,16h13.6362A1.17052,1.17052,0,0,0,16,14.84546V1.15365A1.16977,1.16977,0,0,0,14.81635,0ZM4.74622,13.63368H2.37072V5.99826h2.3755ZM3.55912,4.95505A1.37618,1.37618,0,1,1,4.93457,3.57878,1.37558,1.37558,0,0,1,3.55912,4.95505Zm10.07539,8.67863H11.26159V9.92057c0-.88541-.01519-2.02452-1.23311-2.02452-1.23481,0-1.42321.96506-1.42321,1.96115v3.77648H6.235V5.99826h2.2748V7.04207h.03255a2.49287,2.49287,0,0,1,2.24529-1.23329c2.40281,0,2.84689,1.581,2.84689,3.6374Z'></path>
									</svg>
								</Link>
							</li>
						</ul>
						<Link to=''>Jobs</Link>
						<Link to=''>Contact</Link>
					</div>
					<button type='button'>
						<svg viewBox='0 0 16 16'>
							<path d='M1.11621 4.2666a2.0026 2.0026 0 0 1-.583-.8833v-.7666A.47788.47788 0 0 1 .667 2.2749a.56688.56688 0 0 1 .3164-.1748 49.3662 49.3662 0 0 1 14.0166 0 .57417.57417 0 0 1 .333.1748.482.482 0 0 1 .13379.3418v.7666a2.0026 2.0026 0 0 1-.583.8833L9.2002 8.56689A1.88658 1.88658 0 0 1 8 8.93311a1.88658 1.88658 0 0 1-1.2002-.36622zM10.18359 10l5.28321-4.0498v7.4331a.48117.48117 0 0 1-.13379.3418.57141.57141 0 0 1-.333.1748 48.721 48.721 0 0 1-7 .5 49.29676 49.29676 0 0 1-7.0166-.5.564.564 0 0 1-.31641-.1748.47707.47707 0 0 1-.13379-.3418V5.9502L5.81641 10A3.5224 3.5224 0 0 0 8 10.6665 3.5224 3.5224 0 0 0 10.18359 10z'></path>
						</svg>
					</button>
				</aside>
			</nav>
			<main className={showMenu ? 'show-menu' : ''}>
				<section className='main-articles'>
					<div className='top'>
						<h1>TNW</h1>
						<h2>The heart of tech</h2>
					</div>
					<div className='main-grid-articles'>
						<div>art</div>
						<div>art</div>
						<div>art</div>
						<div>art</div>
						<div>art</div>
					</div>
				</section>
				<section className='popular-today'>
					<h2>POPULAR ARTICLES TODAY</h2>
					<ol>
						<Link to='/'>
							<span>1</span>
							<li>
								Move over Python — Rust is the highest paid
								programming language of 2021
							</li>
						</Link>
						<Link to='/'>
							<span>2</span>
							<li>
								Get these Python questions right to ace your
								data science job interview
							</li>
						</Link>
						<Link to='/'>
							<span>3</span>
							<li>
								Review: Amazon’s Kindle Paperwhite (2021) is
								even better than the Oasis
							</li>
						</Link>
						<Link to='/'>
							<span>4</span>
							<li>
								How to make almost any digital piano sound like
								the real thing, part 2
							</li>
						</Link>
						<Link to='/'>
							<span>5</span>
							<li>
								Everything you wanted to know about the
								metaverse (but were afraid to ask)
							</li>
						</Link>
					</ol>
				</section>
				<section className='latest-stories'>
					<h2>Latest stories</h2>
					<ul>
						<li>
							The Facebook whistleblower’s must-have rules to rein
							in social media
						</li>
						<li>
							Here are 10 awesome deals on power generators and
							solar panels at special pre-Black Friday prices
						</li>
						<li>
							Would you buy a car without its promised tech? BMW
							latest to make compromises due to chip shortage
						</li>
						<li>
							Banks are becoming the top VCs of the fintech world
							— here’s why
						</li>
						<li>
							Apple ‘steals’ former Tesla Autopilot director for
							its iCar dream team
						</li>
						<li>
							Here’s why tech firms are issuing their devs the
							mighty M1 Max MacBooks
						</li>
						<li>
							Clubhouse’s new record feature turns your rooms into
							podcasts
						</li>
						<li>
							How to successfully expand your brand into China
						</li>
					</ul>
				</section>
				<section className='explore-our-channels'>
					<h2>Explore our channels</h2>
					<div className='channels-scroll-horizontal'>
						<div
							style={{
								backgroundImage:
									'url(https://img-cdn.tnwcdn.com/image?fit=260%2C235&url=https%3A%2F%2Fnext.tnwcdn.com%2Fassets%2Fnext%2Fimg%2Fbackdrop-s-plugged.jpg&signature=4423a77a45ff6281a089424a8dd0bc24)',
							}}
						>
							<img
								src='https://next.tnwcdn.com/assets/next/img/placeholder/media/plugged.svg'
								alt='plugged'
							/>
							<p>
								Your sardonic source for consumer tech stories
							</p>
						</div>
						<div
							style={{
								backgroundImage:
									'url(https://img-cdn.tnwcdn.com/image?fit=260%2C235&url=https%3A%2F%2Fnext.tnwcdn.com%2Fassets%2Fnext%2Fimg%2Fbackdrop-s-neural.jpg&signature=7b20700b0f58af3860449664ae1a5e68)',
							}}
						>
							<img
								src='https://next.tnwcdn.com/assets/next/img/placeholder/media/neural.svg'
								alt='neural'
							/>
							<p>Human-centric AI news and analysis</p>
						</div>
						<div
							style={{
								backgroundImage:
									'url(https://img-cdn.tnwcdn.com/image?fit=260%2C235&url=https%3A%2F%2Fnext.tnwcdn.com%2Fassets%2Fnext%2Fimg%2Fbackdrop-s-shift.jpg&signature=1d3ef28f5220f870b7e289810caa80a3)',
							}}
						>
							<img
								src='https://next.tnwcdn.com/assets/next/img/placeholder/media/shift.svg'
								alt='shift'
							/>
							<p>Driving the future of sustainable mobility</p>
						</div>
						<div
							style={{
								backgroundImage:
									'url(https://img-cdn.tnwcdn.com/image?fit=260%2C235&url=https%3A%2F%2Fnext.tnwcdn.com%2Fassets%2Fnext%2Fimg%2Fbackdrop-s-growth-quarters.jpg&signature=72ccfd9e92f942be8ace3526d0dc3aab)',
							}}
						>
							<img
								src='https://next.tnwcdn.com/assets/next/img/placeholder/media/growth-quarters.svg'
								alt='growth-quarters'
							/>
							<p>No-nonsense perspectives on startup growth</p>
						</div>
						<div
							style={{
								backgroundImage:
									'url(https://img-cdn.tnwcdn.com/image?fit=260%2C235&url=https%3A%2F%2Fnext.tnwcdn.com%2Fassets%2Fnext%2Fimg%2Fbackdrop-s-hardfork.jpg&signature=77d9941cfc302cb2e25c39ab3043fa7b)',
							}}
						>
							<img
								src='https://next.tnwcdn.com/assets/next/img/placeholder/media/hardfork.svg'
								alt='house-of-talent'
							/>
							<p>Inside money, markets, and Big Tech</p>
						</div>
						<div
							style={{
								backgroundImage:
									'url(https://img-cdn.tnwcdn.com/image?fit=260%2C235&url=https%3A%2F%2Fnext.tnwcdn.com%2Fassets%2Fnext%2Fimg%2Fbackdrop-s-house-of-talent.jpg&signature=00b64ed0c1f08232e038c697e3f8f755)',
							}}
						>
							<img
								src='https://next.tnwcdn.com/assets/next/img/placeholder/media/house-of-talent.svg'
								alt='house-of-talent'
							/>
							<p>The hottest new jobs in tech</p>
						</div>
					</div>
				</section>
				<section className='newsletter'>
					<h3>Get the snarkiest newsletter in tech</h3>
					<p>
						Subscribe to our twice-weekly Big Spam or check out our
						other newsletters.
					</p>
					<input type='email' placeholder='Email' />
					<button type='button'>Subscribe</button>
					<ul className='social-media'>
						<li>
							<Link to='/'>
								<svg viewBox='0 0 16 16'>
									<path d='M16,1V15a1.007,1.007,0,0,1-1,1H11V9.78125h2l.33594-2.30469H11V5.66406a.9118.9118,0,0,1,1-1.03125h1.5V2.55469a11.284,11.284,0,0,0-1.64062-.10938c-2.19532,0-3.30469,1.21875-3.30469,3.03907V7.47656h-2V9.78125h2V16H1a1.007,1.007,0,0,1-1-1V1A1.007,1.007,0,0,1,1,0H15A1.007,1.007,0,0,1,16,1Z'></path>
								</svg>
							</Link>
						</li>
						<li>
							<Link to='/'>
								<svg viewBox='0 0 16 16'>
									<path d='M8,1.44144c2.1361,0,2.38911.00815,3.23268.04664a4.42649,4.42649,0,0,1,1.48549.27546A2.47861,2.47861,0,0,1,13.638,2.362a2.47851,2.47851,0,0,1,.59844.91986,4.42673,4.42673,0,0,1,.27546,1.48548c.03849.84358.04664,1.0966.04664,3.23269s-.00815,2.38911-.04664,3.23268a4.42675,4.42675,0,0,1-.27546,1.48549,2.6493,2.6493,0,0,1-1.51829,1.51829,4.42675,4.42675,0,0,1-1.48549.27546c-.84345.03849-1.09644.04664-3.23268.04664s-2.38923-.00815-3.23268-.04664a4.42675,4.42675,0,0,1-1.48549-.27546A2.47849,2.47849,0,0,1,2.362,13.638a2.47863,2.47863,0,0,1-.59844-.91986,4.42647,4.42647,0,0,1-.27546-1.48548C1.44959,10.38911,1.44144,10.1361,1.44144,8s.00815-2.38911.04664-3.23268a4.42649,4.42649,0,0,1,.27546-1.48549A2.47861,2.47861,0,0,1,2.362,2.362a2.47863,2.47863,0,0,1,.91986-.59844,4.42647,4.42647,0,0,1,1.48548-.27546C5.61089,1.44959,5.86391,1.44144,8,1.44144M8,0C5.82733,0,5.55489.0092,4.70161.04813A5.8719,5.8719,0,0,0,2.75969.42a3.92134,3.92134,0,0,0-1.417.92273A3.92134,3.92134,0,0,0,.42,2.75969,5.8719,5.8719,0,0,0,.04813,4.70161C.0092,5.55489,0,5.82732,0,8s.0092,2.4451.04813,3.29839A5.8719,5.8719,0,0,0,.42,13.24031a3.92142,3.92142,0,0,0,.92273,1.417,3.92134,3.92134,0,0,0,1.417.92273,5.8719,5.8719,0,0,0,1.94192.37186C5.55489,15.9908,5.82733,16,8,16s2.4451-.0092,3.29839-.04813A5.8719,5.8719,0,0,0,13.24031,15.58a4.09069,4.09069,0,0,0,2.3397-2.3397,5.8719,5.8719,0,0,0,.37186-1.94192C15.9908,10.4451,16,10.17267,16,8s-.0092-2.44511-.04813-3.29839A5.8719,5.8719,0,0,0,15.58,2.75969a3.92134,3.92134,0,0,0-.92273-1.417A3.92134,3.92134,0,0,0,13.24031.42,5.8719,5.8719,0,0,0,11.29839.04813C10.4451.0092,10.17267,0,8,0Z'></path>
									<path d='M8,3.89189A4.10811,4.10811,0,1,0,12.10811,8,4.10811,4.10811,0,0,0,8,3.89189Zm0,6.77477A2.66667,2.66667,0,1,1,10.66667,8,2.66666,2.66666,0,0,1,8,10.66666Z'></path>
									<circle
										cx='12.27042'
										cy='3.72958'
										r='0.96'
									></circle>
								</svg>
							</Link>
						</li>
						<li>
							<Link to='/'>
								<svg viewBox='0 0 16 16'>
									<path d='M14.36719,4.73438v.42968A9.26817,9.26817,0,0,1,5.03906,14.5,9.21783,9.21783,0,0,1,0,13.16406a5.18177,5.18177,0,0,0,.78125.05469,6.62381,6.62381,0,0,0,4.07031-1.55469A3.27084,3.27084,0,0,1,1.79688,9.38281a3.22534,3.22534,0,0,0,.60937.0625,3.2821,3.2821,0,0,0,.875-.11719A3.27938,3.27938,0,0,1,.64844,6.10938V6.07031a3.29,3.29,0,0,0,1.48437.40625A3.266,3.266,0,0,1,.66406,3.75781a3.12781,3.12781,0,0,1,.44532-1.59375A9.32841,9.32841,0,0,0,7.86719,5.53125a3.4194,3.4194,0,0,1-.07031-.75781A3.26752,3.26752,0,0,1,11.07031,1.5a3.39565,3.39565,0,0,1,2.41407,1.03125,6.58929,6.58929,0,0,0,2.07031-.79687,3.25439,3.25439,0,0,1-1.44531,1.82031A6.402,6.402,0,0,0,16,3.03125,6.64835,6.64835,0,0,1,14.36719,4.73438Z'></path>
								</svg>
							</Link>
						</li>
						<li>
							<Link to='/'>
								<svg viewBox='0 0 16 16'>
									<path d='M16,8c0,5.66406,0,5.66406-8,5.66406S0,13.66406,0,8,0,2.33594,8,2.33594,16,2.33594,16,8ZM11,8,6,5v6Z'></path>
								</svg>
							</Link>
						</li>
						<li>
							<Link to='/'>
								<svg viewBox='0 0 16 16'>
									<path d='M0,0V16H16V0ZM12.8,6.4H9.6V9.6H6.4v3.2H3.2V3.2h9.6Z'></path>
								</svg>
							</Link>
						</li>
						<li>
							<Link to='/'>
								<svg viewBox='0 0 16 16'>
									<path d='M1.11621 4.2666a2.0026 2.0026 0 0 1-.583-.8833v-.7666A.47788.47788 0 0 1 .667 2.2749a.56688.56688 0 0 1 .3164-.1748 49.3662 49.3662 0 0 1 14.0166 0 .57417.57417 0 0 1 .333.1748.482.482 0 0 1 .13379.3418v.7666a2.0026 2.0026 0 0 1-.583.8833L9.2002 8.56689A1.88658 1.88658 0 0 1 8 8.93311a1.88658 1.88658 0 0 1-1.2002-.36622zM10.18359 10l5.28321-4.0498v7.4331a.48117.48117 0 0 1-.13379.3418.57141.57141 0 0 1-.333.1748 48.721 48.721 0 0 1-7 .5 49.29676 49.29676 0 0 1-7.0166-.5.564.564 0 0 1-.31641-.1748.47707.47707 0 0 1-.13379-.3418V5.9502L5.81641 10A3.5224 3.5224 0 0 0 8 10.6665 3.5224 3.5224 0 0 0 10.18359 10z'></path>
								</svg>
							</Link>
						</li>
						<li>
							<Link to='/'>
								<svg viewBox='0 0 16 16'>
									<path d='M14.81635,0H1.18015A1.16757,1.16757,0,0,0,0,1.15365V14.84546A1.16833,1.16833,0,0,0,1.18015,16h13.6362A1.17052,1.17052,0,0,0,16,14.84546V1.15365A1.16977,1.16977,0,0,0,14.81635,0ZM4.74622,13.63368H2.37072V5.99826h2.3755ZM3.55912,4.95505A1.37618,1.37618,0,1,1,4.93457,3.57878,1.37558,1.37558,0,0,1,3.55912,4.95505Zm10.07539,8.67863H11.26159V9.92057c0-.88541-.01519-2.02452-1.23311-2.02452-1.23481,0-1.42321.96506-1.42321,1.96115v3.77648H6.235V5.99826h2.2748V7.04207h.03255a2.49287,2.49287,0,0,1,2.24529-1.23329c2.40281,0,2.84689,1.581,2.84689,3.6374Z'></path>
								</svg>
							</Link>
						</li>
					</ul>
				</section>
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
							<h3>
								Nothing Ear (1) review: Style… and substance?
							</h3>
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
									<span>
										Nothing Ear (1) review: Style… and
										substance?
									</span>
								</div>
								<div>
									<Link to='/' />
									<img
										src='https://i.ytimg.com/vi/3Gpmto2eoro/hqdefault.jpg'
										alt=''
									/>
									<span>
										What size iPad Pro should you buy?
									</span>
								</div>
								<div>
									<Link to='/' />
									<img
										src='https://i.ytimg.com/vi/UAu4d0K99Vc/hqdefault.jpg'
										alt=''
									/>
									<span>
										Apple AirTags review: The Find My
										revolution
									</span>
								</div>
								<div>
									<Link to='/' />
									<img
										src='https://i.ytimg.com/vi/0OXyJygPSRI/hqdefault.jpg'
										alt=''
									/>
									<span>
										Sonos Roam review: Smart speaker,
										smarter business
									</span>
								</div>
								<div>
									<Link to='/' />
									<img
										src='https://i.ytimg.com/vi/FAx1wjv2jEE/hqdefault.jpg'
										alt=''
									/>
									<span>
										Learning guitar is better than
										meditation
									</span>
								</div>
								<div>
									<Link to='/' />
									<img
										src='https://i.ytimg.com/vi/jAIdYernX0w/hqdefault.jpg'
										alt=''
									/>
									<span>
										Why your hi-fi setup needs these
										headphones
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='work-with-us'>
					<div className='work-with-us-top'>
						<div className='work-with-us-text'>
							<h3>REACH YOUR GOALS</h3>
							<h2>Work with us</h2>
							<p>
								TNW takes center stage in the tech industry,
								offering creative media campaigns, sizzling tech
								events, bespoke innovation programs, and prime
								office locations in Amsterdam. Want to engage
								your audience more effectively, innovate your
								business, and position your brand in front of a
								digital-savvy audience?
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
				<footer className='footer'>
					<div className='footer-top'>
						<div className='footer-tnw-main'>
							<h2>TNW</h2>
							<h3>The heart of tech</h3>
							<ul className='social-media'>
								<li>
									<Link to='/'>
										<svg viewBox='0 0 16 16'>
											<path d='M16,1V15a1.007,1.007,0,0,1-1,1H11V9.78125h2l.33594-2.30469H11V5.66406a.9118.9118,0,0,1,1-1.03125h1.5V2.55469a11.284,11.284,0,0,0-1.64062-.10938c-2.19532,0-3.30469,1.21875-3.30469,3.03907V7.47656h-2V9.78125h2V16H1a1.007,1.007,0,0,1-1-1V1A1.007,1.007,0,0,1,1,0H15A1.007,1.007,0,0,1,16,1Z'></path>
										</svg>
									</Link>
								</li>
								<li>
									<Link to='/'>
										<svg viewBox='0 0 16 16'>
											<path d='M8,1.44144c2.1361,0,2.38911.00815,3.23268.04664a4.42649,4.42649,0,0,1,1.48549.27546A2.47861,2.47861,0,0,1,13.638,2.362a2.47851,2.47851,0,0,1,.59844.91986,4.42673,4.42673,0,0,1,.27546,1.48548c.03849.84358.04664,1.0966.04664,3.23269s-.00815,2.38911-.04664,3.23268a4.42675,4.42675,0,0,1-.27546,1.48549,2.6493,2.6493,0,0,1-1.51829,1.51829,4.42675,4.42675,0,0,1-1.48549.27546c-.84345.03849-1.09644.04664-3.23268.04664s-2.38923-.00815-3.23268-.04664a4.42675,4.42675,0,0,1-1.48549-.27546A2.47849,2.47849,0,0,1,2.362,13.638a2.47863,2.47863,0,0,1-.59844-.91986,4.42647,4.42647,0,0,1-.27546-1.48548C1.44959,10.38911,1.44144,10.1361,1.44144,8s.00815-2.38911.04664-3.23268a4.42649,4.42649,0,0,1,.27546-1.48549A2.47861,2.47861,0,0,1,2.362,2.362a2.47863,2.47863,0,0,1,.91986-.59844,4.42647,4.42647,0,0,1,1.48548-.27546C5.61089,1.44959,5.86391,1.44144,8,1.44144M8,0C5.82733,0,5.55489.0092,4.70161.04813A5.8719,5.8719,0,0,0,2.75969.42a3.92134,3.92134,0,0,0-1.417.92273A3.92134,3.92134,0,0,0,.42,2.75969,5.8719,5.8719,0,0,0,.04813,4.70161C.0092,5.55489,0,5.82732,0,8s.0092,2.4451.04813,3.29839A5.8719,5.8719,0,0,0,.42,13.24031a3.92142,3.92142,0,0,0,.92273,1.417,3.92134,3.92134,0,0,0,1.417.92273,5.8719,5.8719,0,0,0,1.94192.37186C5.55489,15.9908,5.82733,16,8,16s2.4451-.0092,3.29839-.04813A5.8719,5.8719,0,0,0,13.24031,15.58a4.09069,4.09069,0,0,0,2.3397-2.3397,5.8719,5.8719,0,0,0,.37186-1.94192C15.9908,10.4451,16,10.17267,16,8s-.0092-2.44511-.04813-3.29839A5.8719,5.8719,0,0,0,15.58,2.75969a3.92134,3.92134,0,0,0-.92273-1.417A3.92134,3.92134,0,0,0,13.24031.42,5.8719,5.8719,0,0,0,11.29839.04813C10.4451.0092,10.17267,0,8,0Z'></path>
											<path d='M8,3.89189A4.10811,4.10811,0,1,0,12.10811,8,4.10811,4.10811,0,0,0,8,3.89189Zm0,6.77477A2.66667,2.66667,0,1,1,10.66667,8,2.66666,2.66666,0,0,1,8,10.66666Z'></path>
											<circle
												cx='12.27042'
												cy='3.72958'
												r='0.96'
											></circle>
										</svg>
									</Link>
								</li>
								<li>
									<Link to='/'>
										<svg viewBox='0 0 16 16'>
											<path d='M14.36719,4.73438v.42968A9.26817,9.26817,0,0,1,5.03906,14.5,9.21783,9.21783,0,0,1,0,13.16406a5.18177,5.18177,0,0,0,.78125.05469,6.62381,6.62381,0,0,0,4.07031-1.55469A3.27084,3.27084,0,0,1,1.79688,9.38281a3.22534,3.22534,0,0,0,.60937.0625,3.2821,3.2821,0,0,0,.875-.11719A3.27938,3.27938,0,0,1,.64844,6.10938V6.07031a3.29,3.29,0,0,0,1.48437.40625A3.266,3.266,0,0,1,.66406,3.75781a3.12781,3.12781,0,0,1,.44532-1.59375A9.32841,9.32841,0,0,0,7.86719,5.53125a3.4194,3.4194,0,0,1-.07031-.75781A3.26752,3.26752,0,0,1,11.07031,1.5a3.39565,3.39565,0,0,1,2.41407,1.03125,6.58929,6.58929,0,0,0,2.07031-.79687,3.25439,3.25439,0,0,1-1.44531,1.82031A6.402,6.402,0,0,0,16,3.03125,6.64835,6.64835,0,0,1,14.36719,4.73438Z'></path>
										</svg>
									</Link>
								</li>
								<li>
									<Link to='/'>
										<svg viewBox='0 0 16 16'>
											<path d='M16,8c0,5.66406,0,5.66406-8,5.66406S0,13.66406,0,8,0,2.33594,8,2.33594,16,2.33594,16,8ZM11,8,6,5v6Z'></path>
										</svg>
									</Link>
								</li>
								<li>
									<Link to='/'>
										<svg viewBox='0 0 16 16'>
											<path d='M0,0V16H16V0ZM12.8,6.4H9.6V9.6H6.4v3.2H3.2V3.2h9.6Z'></path>
										</svg>
									</Link>
								</li>
								<li>
									<Link to='/'>
										<svg viewBox='0 0 16 16'>
											<path d='M1.11621 4.2666a2.0026 2.0026 0 0 1-.583-.8833v-.7666A.47788.47788 0 0 1 .667 2.2749a.56688.56688 0 0 1 .3164-.1748 49.3662 49.3662 0 0 1 14.0166 0 .57417.57417 0 0 1 .333.1748.482.482 0 0 1 .13379.3418v.7666a2.0026 2.0026 0 0 1-.583.8833L9.2002 8.56689A1.88658 1.88658 0 0 1 8 8.93311a1.88658 1.88658 0 0 1-1.2002-.36622zM10.18359 10l5.28321-4.0498v7.4331a.48117.48117 0 0 1-.13379.3418.57141.57141 0 0 1-.333.1748 48.721 48.721 0 0 1-7 .5 49.29676 49.29676 0 0 1-7.0166-.5.564.564 0 0 1-.31641-.1748.47707.47707 0 0 1-.13379-.3418V5.9502L5.81641 10A3.5224 3.5224 0 0 0 8 10.6665 3.5224 3.5224 0 0 0 10.18359 10z'></path>
										</svg>
									</Link>
								</li>
								<li>
									<Link to='/'>
										<svg viewBox='0 0 16 16'>
											<path d='M14.81635,0H1.18015A1.16757,1.16757,0,0,0,0,1.15365V14.84546A1.16833,1.16833,0,0,0,1.18015,16h13.6362A1.17052,1.17052,0,0,0,16,14.84546V1.15365A1.16977,1.16977,0,0,0,14.81635,0ZM4.74622,13.63368H2.37072V5.99826h2.3755ZM3.55912,4.95505A1.37618,1.37618,0,1,1,4.93457,3.57878,1.37558,1.37558,0,0,1,3.55912,4.95505Zm10.07539,8.67863H11.26159V9.92057c0-.88541-.01519-2.02452-1.23311-2.02452-1.23481,0-1.42321.96506-1.42321,1.96115v3.77648H6.235V5.99826h2.2748V7.04207h.03255a2.49287,2.49287,0,0,1,2.24529-1.23329c2.40281,0,2.84689,1.581,2.84689,3.6374Z'></path>
										</svg>
									</Link>
								</li>
							</ul>
						</div>
						<div className='footer-side'>
							<div className='footer-tnw-more'>
								<h3>MORE TNW</h3>
								<ul>
									<li>
										<Link to='/'>Media</Link>
									</li>
									<li>
										<Link to='/'>Events</Link>
									</li>
									<li>
										<Link to='/'>Programs</Link>
									</li>
									<li>
										<Link to='/'>Spaces</Link>
									</li>
									<li>
										<Link to='/'>Newsletters</Link>
									</li>
									<li>
										<Link to='/'>Deals</Link>
									</li>
								</ul>
							</div>
							<div className='footer-tnw-about'>
								<h3>ABOUT TNW</h3>
								<ul>
									<li>
										<Link to='/'>Partner with us</Link>
									</li>
									<li>
										<Link to='/'>Jobs</Link>
									</li>
									<li>
										<Link to='/'>{`Terms & Conditions`}</Link>
									</li>
									<li>
										<Link to='/'>Cookie Statement</Link>
									</li>
									<li>
										<Link to='/'>Privacy Statement</Link>
									</li>
									<li>
										<Link to='/'>Editorial Policy</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='footer-bottom'>
						<h4>
							TNW is a <Link to='/'>Financial Times</Link>
							company.
						</h4>
						<h4>{`Copyright © 2006—2021, The Next Web B.V. Made with <3 in Amsterdam.`}</h4>
					</div>
				</footer>
			</main>
		</BrowserRouter>
	);
};

export default App;
