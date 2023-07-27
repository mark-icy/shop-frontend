import Button from './Button';
import './Header.css';

const Header = (props) => {
	return (
		<div className='header'>
            <h1 className="logo">shop</h1>
            <Button name="login"/>
            <Button name="cart"/>
        </div>
        
	)
}

export default Header;
