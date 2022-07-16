import Sidebarboxes from "./Sidebarboxes";

export default function Sidebar(){
    return(
        <div className="sidebar">
                <div>
                    <div className="sidebartopbox">
                        <img src="./assets/catanacomics 1.png"/>
                        <p><em>catanacomics</em><br/>Catana</p> 
                    </div>
                    <div className="sugestions">
                        <p>Sugestôes para você</p>
                        <p><em>Ver tudo</em></p>
                    </div>
                    <Sidebarboxes url="./assets/badvibesmemes 1.png" text="bad.vibes.memes" />
                    <Sidebarboxes url="./assets/chibirdart 1.png" text="chibirdart" />
                    <Sidebarboxes url="./assets/razoesparaacreditar 1.png" text="razoesparaacreditar" />
                    <Sidebarboxes url="./assets/adorableanimals 1.png" text="adorable_animals" />
                    <Sidebarboxes url="./assets/smallcutecats 1.png" text="smallcutecats" />
                    <div className="sidebarbottombox">
                        <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •<br/>
                            Termos • Localizações •Contas mais relevantes •Hashtags •<br/>
                            Idioma</p>
                        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                    </div>
                </div>
            </div>
    );
}