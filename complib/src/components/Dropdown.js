import {useState, useEffect, useRef} from 'react';
import {GoChevronDown } from "react-icons/go";
import Panel from './Panel';

function Dropdown({ options, value, onChange }){

    const [isOpen, setIsOpen] = useState(false);
    //returns object with a current property that references the div
    //add the divEl property to what you want to target
    const divEl = useRef();

    //close the dropdown if click happens outside of element
    useEffect(() =>{
        const handler = (event) =>{
            //don't bother doing anything if there isn't a dropdown
            if(!divEl.current){
                return
            };

            if(!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
            console.log(divEl.current);
        }

        //need to assign in capture phase due to bubble taking longer than react to render the component.
        document.addEventListener('click', handler, true);

        return () =>{
            document.removeEventListener('click', handler);
        }
        
    }, [])
    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) =>{
       
        setIsOpen(false);
        onChange(option);

    }


    const renderedOptions = options.map((option) => {
        return (
            <div 
                className="hover:bg-sky-100 rounded cursor-pointer p-1" 
                onClick={() => {handleOptionClick(option)}} 
                key={option.value}
            >
                    {option.label}
            </div>)
    });



    return (
        <div className='w-48 relative' ref={divEl}>
            <Panel 
                className="flex justify-between items-center" 
                onClick={handleClick}
            >
                {value?.label || "Select..."}
                <GoChevronDown className='text-lg' />
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown;