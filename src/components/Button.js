import './Button.css';

const Button = (props) => {
	return (
		<div onClick={()=>{console.log("ark")}} className='button'>
        		{props.name}
        	</div>
        
	)
}

export default Button;
