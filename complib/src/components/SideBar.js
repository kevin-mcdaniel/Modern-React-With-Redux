import Link from "./Link";

function SideBar(){
    
    const links = [
        {
            label: "Dropdown",
            path:"/dropdown"
        },
        {
            label: "Accordion",
            path:"/accordion"
        },
        {
            label: "Button",
            path:"/buttons"
        },
        {
            label:"Modal",
            path:"/modal"
        },
        {
            label:"Table",
            path:"/table"
        },
        {
            label: "CustomHook",
            path: "/customhook"
        },
        {
            label:"useReducer",
            path: "/reducer"
        }

    ]

    const renderedLinks = links.map((link) =>{
       
        return <Link 
            className="mb-3"
            activeClassName="font-bold border-l-4 pl-2 border-blue-500"
            key={link.label} 
            path={link.path}>{link.label}</Link>
    })

    return(
        <div className="sticky top-0 flex flex-col items-start">{renderedLinks}</div>
    )
}

export default SideBar;