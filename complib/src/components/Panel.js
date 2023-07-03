import classNames from 'classnames';

function Panel({children, className, ...rest}){
    const componentClassNames = classNames("border rounded p-3 shadow bg-white w-full", className)
    return <div className={componentClassNames} {...rest}>{children}</div>
}

export default Panel;