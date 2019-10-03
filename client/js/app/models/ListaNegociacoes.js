class ListaNegociacoes {

    constructor(mensagem){

        this._negociacoes = [];
        //this._postaMensagem = mensagem;
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
        
            
        
            /*
            Para chamar a mensagem quando adicionamos teriamos que declarar a mensagem, podemos usar o Reflect
            Reflect.apply(this._postaMensagem, this._contexto, [this]);
            apply recebe o método, o contexto, e os parametros recebidos pelo método dentro de um array. 
            Quero chamar a mensagem, com o contexto, os parametros são da lista.
            
            this._postaMensagem(this);
            como a função foi chamada por arrow function, ele tem um contexto léxico
            e não é necessário passar o contexto.
            */
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

    esvazia () {
        this._negociacoes = [];
        
        
            /*
            Para chamar a mensagem quando esvaziamos a tabela teriamos que declarar a mensagem, podemos usar o Reflect
            Reflect.apply(this._postaMensagem, this._contexto, [this]);
            apply recebe o método, o contexto, e os parametros recebidos pelo método dentro de um array. 
            Quero chamar a mensagem, com o contexto, os parametros são da lista.
            
            this._postaMensagem(this);
            como a função foi chamada por arrow function, ele tem um contexto léxico 
            e não é necessário passar o contexto.
            */
    }
}