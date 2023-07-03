import LinkedAccordions from "../components/LinkedAccordions";

function AccordionPage(){
    console.clear();

    const items = [
        {
            label:"Lorem ipsum dolor sit amet",
            content:"Donec imperdiet felis eu enim egestas dignissim. Fusce non nunc mauris.",
            id:"1lk2d"
        },
        {
            label:"Sed non aliquet odio",
            content:"Maecenas vehicula, lorem fringilla lacinia finibus, turpis velit tristique velit, quis hendrerit turpis ante id elit.",
            id:"1sdf3"
        },
        {
            label:"Vivamus at semper urna",
            content:"Maecenas malesuada tortor a venenatis eleifend. Mauris sit amet nibh ac sapien efficitur vulputate.",
            id:"dasd154"
        },
    ]

    return (
        
            <div className="m-4">
                <LinkedAccordions items={items}  />
            </div>
        
    )
}

export default AccordionPage;