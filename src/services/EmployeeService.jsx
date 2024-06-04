import axios from 'axios'
const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8090/api/v1/employee/all-employees';
const EMPLOYEE_BASE_SAVE_API_URL = 'http://localhost:8090/api/v1/employee/save-employee';
const EMPLOYEE_BASE_DELETE_API_URL = 'http://localhost:8090/api/v1/employee/delete-employee';
const EMPLOYEE_BASE_GET_BY_ID_API_URL = 'http://localhost:8090/api/v1/employee/find-by-id';
const EMPLOYEE_BASE_UPDATE_API_URL = 'http://localhost:8090/api/v1/employee/update-employee';

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_SAVE_API_URL,employee);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_BASE_DELETE_API_URL+'/'+id);
    }

    updateEmployee(id, employee){
        return axios.put(EMPLOYEE_BASE_UPDATE_API_URL+'/'+id, employee);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_BASE_GET_BY_ID_API_URL+'/'+id);
    }
}

export default new EmployeeService();