import axios from "axios";
const serve = axios.create({
    baseURL: ' https://mallapi.duyiedu.com/'
})
serve.interceptors.request.use(
    config => {
        return config
    },
    (error) => Promise.reject(error)
)

serve.interceptors.response.use(
    (response) => {
        console.log(response);
        if (response.data.status === 'fail') {
            return Promise.reject(response.data.msg);
        }
        else {
            return response.data.data
        }

    },
    (error) => Promise.reject(error)

)
export default serve