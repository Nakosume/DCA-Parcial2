import "./components/export"
import { getCatg, getJoke } from "./service/getCatg";
import { AttributeDisplay } from "./components/display/display";

export enum AttributeCont{
    "in_text" = "in_text"
}

class AppContainer extends HTMLElement {
    in_text: string=''
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    

    async connectedCallback() {
        const category = await getCatg();
        
        this.render(category)
    }

    render(data:any) {
        const something = this.ownerDocument.createElement('div');
        const dispJoke = this.ownerDocument.createElement('app-display')

        data.forEach((e:string)=>{
            const button = this.ownerDocument.createElement('button');
            button.innerText=e;
            button.addEventListener("click",async ()=>{
                const joka= await getJoke(e);
                dispJoke.setAttribute("in_text",joka)
            })
            
            something.appendChild(button);
        }            
        )

        
        
        something.appendChild(dispJoke);

        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)