
class DataService {
    constructor() {


    }

    getData(apiVegPont, callback, hibaCallback) {
        axios.get(apiVegPont)
            .then(function (response) {
                // handle success
                /*console.log("Válasz objektum",response);
                console.log("adatok",response.data);
                console.log("státusz",response.status);
                console.log("Státusz szöveg",response.statustext);
                console.log("Válasz fejléc",response.headers);
                console.log("Válasz config",response.config);*/
                callback(response.data.nevek);

            })
            .catch(function (error) {
                // handle error
                //console.log(error);
                hibaCallback(error);
            })
            .finally(function () {
                // always executed
            });
    }
}
export default DataService;