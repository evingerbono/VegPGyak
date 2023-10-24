import Model from "../Model/AdatModel.js";
import AdatView from "../View/AdatView.js";
import HibaView from "../View/HibaView.js";
import DataService from "../Model/DataService.js";
import TablaView from "../View/TablaView.js";
class Controller {
    constructor() {
        //console.log("alap");
        this.dataservice = new DataService();
        this.dataservice.getData("../adat.json", this.adatokMegj, this.hibaMegj);

    }

    adatokMegj(lista) {
        console.log(lista);
        new AdatView(lista, $(".lista"));
        new TablaView(lista, $(".lista"));
    }
    hibaMegj(error) {
        console.log(error);
        new HibaView(error, $(".lista"));
    }
}
export default Controller;