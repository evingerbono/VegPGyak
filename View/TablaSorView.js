
class TablaSorView {
    #lista = [];
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.tablaElem=szuloElem;
        this.tablaSorGen();
    }
    tablaSorGen() {
        let txt = '<tr>';
        for (const key in this.#lista) {
            txt += `<td>${this.#lista[key]}</td>`
        }
        txt += `<td><button type="button" class="kesz btn">✔</button> <button type="button" class="torol btn">❌</button></td>`;
        txt += '</tr>';
        this.tablaElem.append(txt);
    }
}
export default TablaSorView;