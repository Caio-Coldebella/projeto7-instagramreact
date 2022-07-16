import Maincontent from "./Maincontent";
import Sidebar from "./Sidebar";

export default function Content(){
    return(
        <div class="content">
            <Maincontent/>
            <Sidebar/>
        </div>
        );
    }