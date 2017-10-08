
import store from '../../../flux/store'
import actions from "../../../flux/actions"
import {Link} from "react-router"
import Fetch from '../../../modules/fetch'

class MainQuestionItemList extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            position_info:store.getPositionInfo(),
            list1:[],
            list2:[],
            list3:[]
        }
    }
    componentWillMount(){
        this.getListData1()
        this.getListData2()
        this.getListData3()
    }
    componentWillReceiveProps(props,state){

    }
    getListData1(){
        Fetch.Get("http://api.12355.net/pc/service/index?page=0&rows=6&qType=1&sitenavDid="+this.state.position_info.did+"&_="+this.state.position_info.nowTime+"",{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            this.setState({
                list1:json.rows
            })

        })
    }
    getListData2(){
        Fetch.Get("http://api.12355.net/pc/service/index?page=0&rows=6&qType=2&sitenavDid="+this.state.position_info.did+"&_="+this.state.position_info.nowTime+"",{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            this.setState({
                list2:json.rows
            })
        })
    }
    getListData3(){
        Fetch.Get("http://api.12355.net/pc/service/index?page=0&rows=6&qType=3&sitenavDid="+this.state.position_info.did+"&_="+this.state.position_info.nowTime+"",{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            this.setState({
                list3:json.rows
            })
        })
    }
    showlist(list=this.state.list1){
        let arr=[]
        list.forEach(ele=>{
            let godetali={ 
                pathname:"/commentdetail", 
                query:{qyId:ele.quId},   
            } 
            arr.push(
            <Link to={godetali}><li>
                <div className="Main_tuijian_box__left">
                    <img src={ele.photourl}/>
                </div>
                <div className="Main_tuijian_box__right">
                    <h3>{ele.title}</h3>
                    <h4>{ele.askContent}</h4>
                    <p>
                        <span>{ele.realname}</span>
                        <span>{ele.askTime}</span>
                        <span>
                            <i></i>
                            <b>{ele.commentsNum}</b>
                        </span>
                        </p>
                </div>
            </li></Link>)
        })
        return arr
    }

    render(){
        let l;
        if(this.props.type==1){
            l=this.showlist(this.state.list1)
        }
        if(this.props.type==2){
            l=this.showlist(this.state.list2)
        }
        if(this.props.type==3){
            l=this.showlist(this.state.list3)
        }
        return(
            <ul>
                {l}
            </ul>
        )
    }
    componentDidMount(){
    	let that = this
    	//当store里数据改变的时候，组件会重新获取数据
    	store.addPositionChangeListener(()=>{
    		that.setState({
	            position_info:store.getPositionInfo()
	       	})
        })
    }
}

 


export default MainQuestionItemList