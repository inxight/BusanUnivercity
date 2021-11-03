import langData from '../../../config.json';

const initialSatate = {
    lang:"ko"
}

export default function changeLanguge(state = initialSatate, action){
    switch(action.type){
        case 'eng':{
            return {
                lang:"eng"
            }
        }
        default:
            return state
    }
}