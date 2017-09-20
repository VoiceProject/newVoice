

const Dispatcher = require("flux").Dispatcher

const dispatcher=new Dispatcher()
import store from './store'
dispatcher.register((action)=>{
    switch(action.type){
        case 'CHECK_ACTIVE':
            store.changeActive()
    }
})