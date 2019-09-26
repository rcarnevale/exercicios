class Negociacao {

    constructor (data, quantidade, valor) {

        this._data = new Date(data.getTime());  
        //o new Date gera um novo objeto que vai ficar congelado pelo .freeze
        //sem isso a data pode ser alterada
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this);
    }

    get volume() {

        return this._quantidade * this._valor;
    
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
};