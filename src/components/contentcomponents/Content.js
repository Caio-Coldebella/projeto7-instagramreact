import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Posts from "./Posts";

export default function Content(){
    return(
        <div className="content">
            <div className="maincontent">
                <Stories icon="chevron-forward-circle"/>
                <Posts/>
            </div>
            <Sidebar/>
        </div>
        );
    }