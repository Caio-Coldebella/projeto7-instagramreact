import Boxtop from "./Boxtop";
import Boxbottom from "./Boxbottom";

export default function Box(props){
    let properties = props.properties;
    return (
        <div className="box">
            <Boxtop img={properties.imgtop} title={properties.title} icon={properties.topicon}/>
            <img src={properties.img}/>
            <Boxbottom leftlogos={properties.leftlogos} rigthlogo={properties.rigthlogo} img={properties.bottomimg} 
            text={properties.bottomtext}/>
        </div>
    );
}