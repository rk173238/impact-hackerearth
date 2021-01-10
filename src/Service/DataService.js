import Axios from "axios"
import { url } from "../Constant/UrlConstant"

export const DataService={
    fetchCandidates
}
function fetchCandidates(){
    let api=url.data;
    return Axios.get(api).then(res=>res.data)
}