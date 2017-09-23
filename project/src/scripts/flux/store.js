

const EventEmitter = require("events").EventEmitter

const store = Object.assign({},EventEmitter.prototype,{
    position_info:{
        districtName:"广东",
        did:440000,
        nowTime:new Date().getTime()
    },
    getPositionInfo(){
        return this.position_info
    },
    changePositionInfo(info){
       
        this.position_info=info
        console.log(this.position_info,"store")
        this.emit("positionInfo-change")
    },
    addPositionChangeListener(callback){
		this.on("positionInfo-change",callback)
	}
})

export default store