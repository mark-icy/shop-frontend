import './Button.css';

const Button = (props) => {
	return (
		<div onClick={()=>{props.onClick()}} className={props.className}>
        		<p className="text">{props.name}</p>
        	</div>
        
	)
}

export default Button;
