import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavMenu = ({ showMenu, noTransition, slideMenu }) => {
	return (
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
					<NavLink
						exact='true'
						to='/'
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
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
									<circle cx='12.27042' cy='3.72958' r='0.96'></circle>
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
					</ul>
					<span>
						<Link to=''>Jobs</Link>
						<Link to=''>Contact</Link>
					</span>
				</div>
				<footer className='my-footer'>
					<a href='https://github.com/gizinski-jacek/responsive-design'>
						<svg
							viewBox='0 0 16 16'
							height='18px'
							width='18px'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'
							></path>
						</svg>
						Gizinski Jacek
					</a>
				</footer>
			</aside>
		</nav>
	);
};

export default NavMenu;
