export default function Boxbottom(props){
    return(
        <div className="box-bottom">
            <div className="firstline">
                <div>
                    {props.leftlogos.map(icon => (<ion-icon name={icon}></ion-icon>))}
                </div>
                <ion-icon name={props.rigthlogo}></ion-icon>
            </div>
            <div className="secondline">
                <img src={props.img}/>
                {props.text}
            </div>
        </div>
    );
}