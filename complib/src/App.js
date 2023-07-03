
import Route from "./components/Route";
import SideBar from "./components/SideBar";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CustomHookDemo from "./pages/CustomHookDemo";
import UseReducerDemo from "./pages/UseReducerDemo";

function App() {
    console.clear();

    //const path = window.location.pathname;
    //window.history.pushState({}, '', '/dropdown')
    return (
       <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">

        <SideBar />
        
            
        <div className="col-span-5">
            <Route path="/accordion">
                <AccordionPage />
            </Route>
            <Route path="/dropdown">
                <DropdownPage />
            </Route>
            <Route path="/buttons">
                <ButtonPage />
            </Route>
            <Route path="/modal">
                <ModalPage />
            </Route>
            <Route path="/table">
                <TablePage />
            </Route>
            <Route path="/customhook">
                <CustomHookDemo initialCount={10} />
            </Route>
            <Route path="/reducer">
                <UseReducerDemo initialCount={10} />
            </Route>
        </div>
       </div> 
        
    )
}

export default App