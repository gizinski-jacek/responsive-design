import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import Articles from './components/Articles';
import Popular from './components/Popular';
import Stories from './components/Stories';
import Channels from './components/Channels';
import Newsletter from './components/Newsletter';
import Watch from './components/Watch';
import Work from './components/Work';
import Footer from './components/Footer';

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
				setShowMenu(false);
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
			<NavMenu
				showMenu={showMenu}
				noTransition={noTransition}
				slideMenu={slideMenu}
			/>
			<main className={showMenu ? 'show-menu' : ''}>
				<Articles />
				<Popular />
				<Stories />
				<Channels />
				<Newsletter />
				<Watch />
				<Work />
				<Footer />
				<Stories />
			</main>
		</BrowserRouter>
	);
};

export default App;
