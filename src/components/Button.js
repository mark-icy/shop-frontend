import './Button.css';

const Button = (props) => {
	return (
		<div onClick={()=>{console.log("ark")}} className='button'>
        		<p className="text">{props.name}</p>
        	</div>
        
	)
}

export default Button;
