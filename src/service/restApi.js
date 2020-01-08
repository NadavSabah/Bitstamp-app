import axios from 'axios'

export default {
    getData

}


async function getData() {
    let res = await axios.get('https://jsonplaceholder.typicode.com/albums')
    return res.data
}


