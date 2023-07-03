

function Accordion({item, open, ...rest}){
    const {label, content} = item;
    
    const isOpen = open || false;

    return(
      
        <details className="my-2" open={isOpen} {...rest}>
            <summary className="bg-slate-100 border border-slate-300 p-2">
                {label}
            </summary>
            <p className="border border-slate-300 border-t-0 p-2">
                {content}
            </p>
        </details>
        
    )
}

export default Accordion;