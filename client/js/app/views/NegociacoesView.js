class NegociacoesView extends View {
//extends importa o conteúdo comum das classes View que está em View.js

    constructor(elemento){
        super(elemento);
    }
//constructor recebe e repassa o elemento.

    template (model) { 

        return `
            <table class="table table-hover table-bordered">
                <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
                </thead>

                <tbody>
                    ${model.negociacoes.map(negociacao => {
                        
                        return `
                        <tr>
                            <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                        `
                    }).join()}
                </tbody>

                <tfoot>
                    <td colspan="3"></td>
                    <td>
                    ${
                        model.negociacoes.reduce( function (total, negociacao) {
                            return total + negociacao.volume;                          
                        }, 0.0)
                    }
                    </td>
                </tfoot>
            </table>
            `
    }
}