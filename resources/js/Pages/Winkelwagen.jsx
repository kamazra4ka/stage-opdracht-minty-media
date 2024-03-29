import NavbarComponent from "../Components/NavbarComponent.jsx";
import WinkelwagenContentComponent from "@/Components/Winkelwagen/WinkelwagenContentComponent.jsx";
function Winkelwagen(props) {

    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('userId', userId);
    }

    return (
        <div className="App">
            <header>
                <NavbarComponent active={props.active} />
            </header>
            <WinkelwagenContentComponent />
        </div>
    );
}

export default Winkelwagen;
