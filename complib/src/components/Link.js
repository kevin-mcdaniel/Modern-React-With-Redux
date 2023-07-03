import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames';

function Link({path, children, className, activeClassName}){
    const {navigate, currentPath} = useNavigation();
    const classes = classNames('text-blue-500 cursor-pointer', 
        className,
        currentPath===path && activeClassName
        )

    const handleClick = (event) => {
        //metaKey is mac, ctrlKey is windows
        if(event.metaKey || event.ctrlKey){
            return
        }
        event.preventDefault();
        navigate(path);

    }
    return(
        <a href="{path}" onClick={handleClick} className={classes}>{children}</a>
    )

}

export default Link;