import {addBanana} from './banana'

const getApple = () => {

    const banana =  addBanana()
    return `apple,${banana}`
}



export {
    getApple
}