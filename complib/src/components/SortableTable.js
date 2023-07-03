import useSort from "../hooks/use-sort";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go';

function SortableTable(props) {
    const { data, config } = props

    const {sortBy, sortOrder, setSortColumn, sortedData} = useSort(data, config)

    

    const updatedConfig = config.map((column) =>{
        
        if(!column.sortValue){
            return column
        } 

        return {
            ...column,
            header:() => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={ () => setSortColumn(column.label) }>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        }
    })


    


    return <Table {...props} config={updatedConfig} data={sortedData} />
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return (
            <div className="flex flex-col">
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        )
    }
    if(sortOrder === null){
        return (
            <div className="flex flex-col">
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        )
    } else if (sortOrder === 'asc'){
        return <div> <GoArrowSmallUp /> </div>
    } else if (sortOrder === 'desc'){
        return <div> <GoArrowSmallDown /> </div>
    }

}

export default SortableTable;