class NegociacaoController {

    //o constructor vai buscar e armazenar a informação nos atributos da classe NegociacaoController
    constructor(){
        
        let $ = document.querySelector.bind(document);
        //querySelector remete ao this(document), quando colocamos numa variável isso se perde sem o .bind()

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            this._negociacoesView, 
            ["adiciona", "esvazia"]);
        
        
        this._mensagemView = new MensagemView($("#MensagemView"));
        
        this._mensagem = new Bind(
            new Mensagem, 
            this._mensagemView, 
            ["texto"]);
    
    }
    adiciona(event) {
        event.preventDefault();    

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso!";

        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
        
    }

    _criaNegociacao () {

        return new Negociacao(
            DateHelper.textoParaData(
            this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
            );
        
            //DateHelper pode ser chamado direto sem a criação de um let poir ser static!

    }

    _limpaFormulario (){
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
        //document.querySelector("#data").focus();
    }

    apaga () {
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = "Negociações apagadas com sucesso!";

    }
}