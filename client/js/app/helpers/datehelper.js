class DateHelper {


    constructor() {
        throw new Error("DateHelper não pode ser instanciada. Métodos estáticos.");
    }
    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
        

    }

    static textoParaData(texto) {
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
        throw new Error ("Insira a data no formato yyyy/mm/dd");

        return new Date(texto.split("-")); 
        //tb é possivel usar .replace( /-/g, ",") onde o g significa global
    }
}