import Button from './Button';
import './Header.css';

const Header = (props) => {
	return (
		<div className='header'>
            <Button name="login"/>
            <Button name="cart"/>
        </div>
        
	)
}

export default Header;
