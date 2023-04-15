import "./components/export"
import { getCatg } from "./service/getCatg";
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

        data.forEach((e:any)=>{
            const button = this.ownerDocument.createElement('button');
            button.innerText=e;
            button.addEventListener("click",()=>console.log(button.innerText))
            
            something.appendChild(button);
        }            
        )

        const dispJoke = this.ownerDocument.createElement('app-display')
        dispJoke.setAttribute("in_text","hello")
        something.appendChild(dispJoke);

        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)