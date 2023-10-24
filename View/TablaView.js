import TablaSorView from "./TablaSorView.js";
class TablaView {
    #lista = [];
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.tablaMegj();
    }

    tablaMegj() {
        let txt = '<table class="table table-bordered">';
        for (const key in this.#lista) {
            txt += new TablaSorView(this.#lista[key], this.szuloElem);
        }
        txt += '</table>';
        this.szuloElem.html(txt);
    }
}
export default TablaView;