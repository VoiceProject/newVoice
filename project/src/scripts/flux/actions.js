

import dispatcher from './dispatcher'

const actions={
    changePosition(info){
        console.log(info,"actions")
        dispatcher.dispatch({
            type:"CHANGE_POSITION",
            info
        })
    }
}

export default actions