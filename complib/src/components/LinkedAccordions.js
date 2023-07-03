import {useState} from 'react';
import Accordion from './Accordion';
import Button from './Button';

function LinkedAccordions({items, initial, all}){
    //A list of accordions that are linked together such that if one is open, the other is collapsed. 
    //Provides expand/collapse all functionality

    const [expandedIndex, setExpandedIndex] = useState(initial) 
    const [expandAll, setExpandAll] = useState(all);

    //TODO add a prop to conditionally flag auto collapse
    const handleExpand = (e, index) => {
        //Click functionality for the accordion. With a linked accordion we need
        //to override the browser's default behavior
        e.preventDefault();
        
        const nextIndex = expandedIndex === index ? -1 : index;
        
        //if expand all was toggled, it's now no longer valid so set it to false
        setExpandAll(false);

        setExpandedIndex(nextIndex);
    }

    const handleExpandAll = () =>{
        setExpandAll(!expandAll);
        setExpandedIndex(-1);
    }
    
    //TODO - set a prop to enable/disable this button
    const allButton = <Button onClick={handleExpandAll}>{expandAll ? "Collapse All" : "Expand All"}</Button>

    const renderedItems = items.map((item, index) => {
        //loop through the dataset and generate the components

        let isOpen = false;

        //if expand all is toggled, open all accordions, otherwise only open the selected accordion
        if(expandAll){
            isOpen = true;
        } else {
            isOpen = index === expandedIndex;
        }
        
        return (
            <Accordion item={item} key={item.id} open={isOpen} onClick={(event) =>{handleExpand(event, index)}} />
        );
    });

    return(
        <div>
            {
                //TODO add more styling around expand all button
            }
            {allButton}
            {renderedItems}
        </div>
    );
}

export default LinkedAccordions;