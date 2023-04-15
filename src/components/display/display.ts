export enum AttributeDisplay {
    "in_text" = "in_text"
}

export default class Display extends HTMLElement {
    in_text?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeDisplay, null> = {
            in_text: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeDisplay,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
            this.render()
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        const showJoke = this.ownerDocument.createElement('section');
        showJoke.innerText = `${this.in_text}`
        this.shadowRoot?.appendChild(showJoke)
    }        
    
}

customElements.define('app-display',Display);