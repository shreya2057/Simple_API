import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import Create from "./screen/Create";
import Read from "./screen/Read";

function AppRouter(){
    return <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="create" element={<Create/>}/>
            <Route path="read" element={<Read/>}/>
        </Routes>
    </Router>
}

export default AppRouter