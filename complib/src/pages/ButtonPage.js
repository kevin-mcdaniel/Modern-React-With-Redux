import Button from "../components/Button"
import {GoBell} from "react-icons/go";
function ButtonPage() {
    console.clear();
    return (
        <div className="flex gap-x-8 justify-center mt-4">
            <div className="flex flex-col gap-y-4 m">
                <div>
                    <Button>
                        <GoBell />
                        Plain
                    </Button>    
                </div>
                <div>
                    <Button primary>Primary</Button>
                </div>
                <div>
                    <Button secondary>Secondary</Button> 
                </div>
                <div>
                    <Button success>Success</Button> 
                </div>
                <div>
                    <Button warning>Warning</Button>
                </div>
                <div>
                    <Button danger>Danger</Button>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div>
                    <Button rounded>
                        <GoBell />
                        Plain
                    </Button>    
                </div>
                <div>
                    <Button primary rounded>Primary</Button>
                </div>
                <div>
                    <Button secondary rounded>Secondary</Button> 
                </div>
                <div>
                    <Button success rounded>Success</Button> 
                </div>
                <div>
                    <Button warning rounded>Warning</Button>
                </div>
                <div>
                    <Button danger rounded>Danger</Button>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div outline>
                    <Button>
                        <GoBell />
                        Plain
                    </Button>    
                </div>
                <div>
                    <Button primary outline>Primary</Button>
                </div>
                <div>
                    <Button secondary outline>Secondary</Button> 
                </div>
                <div>
                    <Button success outline>Success</Button> 
                </div>
                <div>
                    <Button warning outline>Warning</Button>
                </div>
                <div>
                    <Button danger outline>Danger</Button>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div>
                    <Button outline rounded>
                        <GoBell />
                        Plain
                    </Button>    
                </div>
                <div>
                    <Button primary outline rounded>Primary</Button>
                </div>
                <div>
                    <Button secondary outline rounded>Secondary</Button> 
                </div>
                <div>
                    <Button success outline rounded>Success</Button> 
                </div>
                <div>
                    <Button warning outline rounded>Warning</Button>
                </div>
                <div>
                    <Button danger outline rounded>Danger</Button>
                </div>
            </div>
        </div>        
    )
}

export default ButtonPage