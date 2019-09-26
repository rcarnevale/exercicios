class NegociacaoController {

    //o constructor vai buscar e armazenar a informação nos atributos da classe NegociacaoController
    constructor(){
        
        let $ = document.querySelector.bind(document);
        //querySelector remete ao this(document), quando colocamos numa variável isso se perde sem o .bind()

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes;

    }
    adiciona(event) {
        event.preventDefault();    

        this._listaNegociacoes.adiciona(this.criaNegociacao());
        //this._limpaFormulário();
        console.log(this._listaNegociacoes.negociacoes);
        
    }

    criaNegociacao () {

        new Negociacao(
            DateHelper.textoParaData(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
            )
        );
        
            //DateHelper pode ser chamado direto sem a criação de um let poir ser static!

    }

    _limpaFormulário (){
        this._inputData = "";
        this._inputQuantidade = 1;
        this._inputValor = 0.0;

        this._inputData.focus();
    }


}