import Box from "./box/Box"
export default function Posts(){
    let iconslist = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    
    let propsimg1 = {imgtop: "./assets/meowed 1.png", title: "meowed", topicon: "ellipsis-horizontal",
    img: "./assets/gato-telefone.png", leftlogos: iconslist, rigthlogo: "bookmark-outline",
    bottomimg:"./assets/respondeai 1.png", bottomtext: <p>Curtido por <em>respondeai</em> e <em>outras 101.523 pessoas</em></p> };
    
    let propsimg2 = {imgtop: "./assets/barked 1.png", title: "barked", topicon: "ellipsis-horizontal",
    img: "./assets/dog 1.png", leftlogos: iconslist, rigthlogo: "bookmark-outline",
    bottomimg:"./assets/adorableanimals 1.png", bottomtext: <p>Curtido por <em>adorable_animals</em> e <em>outras 99.159 pessoas</em></p> };

    return(
    <div className="posts">
        <Box properties={propsimg1}/>
        <Box properties={propsimg2}/>
        <Box properties={propsimg1}/>
        <Box properties={propsimg2}/>
    </div>
    );
}