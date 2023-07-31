import './Login.css';
import Button from './Button';

const Login = () => {
	return (
        <div className='login'>
			<div className='login-forms'>
            <div className= "login-form">
				<form>
					<label>
						<input type="e-mail" name="name"/>
					</label>
				</form>
			</div>
			<div className='password-form'>
				<form>
					<label>
						<input type="password" name="password"/>
					</label>
				</form>
			</div>
			<Button className="login-button" name="login"/>
			</div>
		</div>

        
	)
}

export default Login;
