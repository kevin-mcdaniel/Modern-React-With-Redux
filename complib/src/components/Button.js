import classnames from 'classnames'

function Button({
    children, 
    primary, 
    secondary, 
    success, 
    warning, 
    danger, 
    rounded, 
    outline,
    ...rest//...rest gathers all remaining props in an object
}){
    //need to add any class name that gets passed from the parent so it doesn't get overwritten
    const classes = classnames(
        rest.className,
        'flex gap-x-0.5 items-center px-3 py-1.5 border', {
        'border-sky-500': primary,
        'border-gray-600': secondary,
        'border-green-500': success,
        'border-yellow-400': warning ,
        'border-red-500': danger,
     
        'bg-sky-500': primary && !outline,
        'bg-gray-600': secondary && !outline,
        'bg-green-500': success && !outline,
        'bg-yellow-400': warning && !outline,
        'bg-red-500': danger && !outline,
        'bg-white': outline,
     
        'text-white': !outline && (primary || secondary || success || warning || danger),
        'text-sky-500': outline && primary,
        'text-gray-600': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
        
        'rounded-full': rounded,

      }); 
   
//{...rest} - take all the values and assign them as props
    return <button {...rest} className={classes} >{ children }</button>
}

//replace this with typescript
//https://www.udemy.com/course/react-redux/learn/lecture/36976396#questions/19109310
Button.propTypes = {
    checkButtonType: ({primary,secondary,success,warning,danger}) => {

        const threshold = Number(!!primary) 
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!!success)
        + Number(!!danger)
        if(threshold > 1){
            return new Error('Only one of primary, secondary, success, warning or danger can be true');
        }
        
    }
}

export default Button;