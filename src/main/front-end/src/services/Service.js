import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/net2grid";

class Service {
    
    getModels(){
        return axios.get(EMPLOYEE_API_BASE_URL + '/models');
    }

    getIDs(){
        return axios.get(EMPLOYEE_API_BASE_URL + '/models/ids');
    }

    getCharacteristics(props) {
        console.log(props.appliance, props.id, props.onlyId, props.size, props.comp)
        return axios.get(EMPLOYEE_API_BASE_URL + '/models/characteristics', { params: { appliance: props.appliance , id:  props.id, onlyId: props.onlyId, size: props.size, comp: props.comp}});
    }

    getPhaseMaps (props) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/models/phaseMaps', {params: {id: props.id}})
    }

    getAppliances(props) {
        let existence = {
            exist: props.exist.toString()
          };
        let check = {
            appliance: props.appliance.toString()
        };
        console.log(props.appliance,props.exist,props.id)
        return axios.get(EMPLOYEE_API_BASE_URL + '/models/appliance', {params: {appliance: check.appliance , exist: existence.exist, id:  props.id}});
    }

    getDateComparison(props) {
        console.log(props.date,props.d,props.when,props.id)
        return axios.get(EMPLOYEE_API_BASE_URL + '/models/date', {params: {date: props.date , d: props.d, when: props.when, id:  props.id}});
        }

    getApplianceDate(props) {
        console.log(props.appliance, props.date,props.when, props.id)
        return axios.get(EMPLOYEE_API_BASE_URL + '/models/applianceDate', {params: { appliance: props.appliance, date: props.date , when: props.when, id:  props.id}});
    }

}

export default new Service()