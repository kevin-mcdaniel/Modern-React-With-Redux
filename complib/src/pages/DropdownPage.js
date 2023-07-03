import {useState} from 'react';
import Dropdown from "../components/Dropdown";

function DropdownPage(){
    const [color, setColor] = useState(null);

    const changeColor = (option) =>{
        setColor(option);
    }

    const options = [
        {
            label:"Red",
            value:"red"
        },
        {
            label:"Green",
            value:"green"
        },{
            label:"Blue",
            value:"blue"
        }
    ]

    return (
        
            <div className="m-4 flex">
                <Dropdown options={options} value={color} onChange={changeColor} />
            </div>
        
    )
}

export default DropdownPage;