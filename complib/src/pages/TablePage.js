import SortableTable from "../components/SortableTable";


function TablePage() {

    const simpleData = [5,1,4,3]
    
    simpleData.sort((a, b) => {
        //a(2nd value of the pair)
        
        // 5 1 4 3
        // b a
        //if we want a to go before b, return a negative number
        // if we want b to go before a, return a positive number
        //if they're the same, return 0


        //lowest to highest(Ascending)
        return a - b


    })

    const textData = ["t", "A", "a", "b", "B"]

    textData.sort((a, b) => {
        return a.localeCompare(b)
    });

    const objData = [
        {
            weight: 13,
            cost: 5,
            name:'Onion'
        },
        {
            weight: 10,
            cost: 2,
            name:'Tomato'
        },
        {
            weight:12,
            cost:15,
            name:"Carrot"
        }
    ]

    function getSortValue(vegetable){
        return vegetable.cost;
    }
    const sortOrder = 'asc';

    objData.sort((a, b) =>{
        // Asc on cost / weight
        //return (a.cost / a.weight) - (b.cost / b.weight)
        const valueA = getSortValue(a);
        const valueB = getSortValue(b);
        const reverseOrder = sortOrder === 'asc' ? 1 : -1
        if(typeof valueA === 'string'){
            return valueA.localeCompare(valueB) * reverseOrder
        } else {
            return (valueA - valueB) * reverseOrder
        }
    })


    const tableData = [
        {
            name:"Orange",
            color:"bg-orange-400",
            score:5
        },
        {
            name:"Apple",
            color:"bg-red-700",
            score:3
        },
        {
            name:"Banana",
            color:"bg-yellow-300",
            score:1
        },
        {
            name:"Lime",
            color:"bg-green-400",
            score:4
        },
        
    ]

    const columnConfig = [
        {
            label:"Fruit",
            render:(fruit) => fruit.name,
            sortValue:(fruit) => fruit.name
        },
        {
            label:"Color",
            render:(fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
        },
        {
            label:"Score",
            render:(fruit) => fruit.score,
            sortValue:(fruit) => fruit.score
        }
    ]

    const keyFn = (fruit) => {
        return fruit.name;
    }

    return <>
        <SortableTable data={tableData} config={columnConfig} keyFn={keyFn} />
    </>
}

export default TablePage;