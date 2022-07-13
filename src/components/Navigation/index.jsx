// crear componenetes
import { Link } from 'react-router-dom';

export const Navigation = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container'>
				<Link to='/' className='navbar-brand'>
					Note Apps
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Notes
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/create'>
								Create Note
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/user'>
								Create User
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
