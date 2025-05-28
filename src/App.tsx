import './App.css'
import AppRoutes from "./routes/AppRoutes.tsx";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";

function App() {

    return (
        <>  <Header/>
            <Main>
                <AppRoutes/>
            </Main>
        </>
    )
}

export default App
