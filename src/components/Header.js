import Button from './Button';
import './Header.css';

const Header = (props) => {
    const onClickLogin = () => { 
        if (props.login == "none"){
            props.setLogin("block")
        } else {
            props.setLogin("none")
        }
        console.log(props.login)
    }
	return (
		<div className='header'>
            <h1 className="logo">shop</h1>
            <Button className="button" name="login" onClick={onClickLogin}/>
            <Button className="button" name="cart"/>
        </div>
        
	)
}

export default Header;
