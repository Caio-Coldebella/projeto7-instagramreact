import Story from "./Story";

export default function Stories(props){
    return(
    <div className="stories">
        <ion-icon name={props.icon}></ion-icon>
        <Story background="./assets/stories_background.jpg" imgurl="./assets/9gag 1.png" name="9gag"/>
        <Story background="./assets/stories_background.jpg" imgurl="./assets/meowed 1.png" name="meowed"/>
        <Story background="./assets/stories_background.jpg" imgurl="./assets/barked 1.png" name="barked"/>
        <Story background="./assets/stories_background.jpg" imgurl="./assets/nathanwpylestrangeplanet 1.png" name="nathanwpyle..."/>
        <Story background="./assets/stories_background.jpg" imgurl="./assets/wawawiwacomicsa 1.png" name="wawawiwac..."/>
        <Story background="./assets/stories_background.jpg" imgurl="./assets/respondeai 1.png" name="respondeai"/>
        <Story background="./assets/stories_background.jpg" imgurl="./assets/filomoderna 1.png" name="filomoderna"/>
        <Story background="./assets/stories_background.jpg" imgurl="./assets/memeriagourmet 1.png" name="memeria"/>
    </div>
    );
}