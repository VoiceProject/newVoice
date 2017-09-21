

const Dispatcher = require("flux").Dispatcher

const dispatcher=new Dispatcher()
import store from './store'
dispatcher.register((action)=>{
    switch(action.type){
        case 'CHANGE_POSITION':
            console.log(action.info,"dispatcher")
            store.changePositionInfo(action.info)
    }
})

export default dispatcher