class MensagemView extends View {
//extends importa o conteúdo da classes View que está em View.js
//o constructor e os métodos
 
    constructor(elemento){
        super(elemento);
    }
//constructor recebe e repassa o elemento.

    template(model){

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }
}