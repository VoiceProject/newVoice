
import {Link} from 'react-router'
import Fetch from '../../../modules/fetch'
class MainHelpItemList extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            list1:[],
            list2:[]
        }
    }
    componentWillMount(){
        this.getListData1()
        this.getListData2()
    }
    componentWillReceiveProps(props,state){

    }
    getListData1(){
        let time=new Date().getTime()
        Fetch.Get("http://api.12355.net/pc/help/findAllHelp?title=&auditStatus=1&page=1&rows=6&sort=create_time&order=desc&_="+time+"",{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            console.log(json)
            this.setState({
                list1:json.rows
            })

        })
    }
    getListData2(){
        let time=new Date().getTime()
        Fetch.Get("http://api.12355.net/pc/help/findAllHelp?title=&auditStatus=2&page=1&rows=6&sort=create_time&order=desc&_="+time+"",{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            this.setState({
                list2:json.rows
            })

        })
    }


    showlist(list=this.state.list1){
        let str=""
        if(list==this.state.list1){
            str="求助中"
        }else if(list=this.state.list2){
            str="已解决"
        }

        let arr=[]
        list.forEach(ele=>{
            let imgArr=ele.imgUrl.split(",")
            // console.log(imgArr)
            if(imgArr[0]==""){
                imgArr[0]="http://www.gd12355.org/wechat/public/img/default/default_12.jpg"
            }
            let hpId="/findhelp?hpId="+ele.hpId
            arr.push(
            <Link to={hpId}><li data-id={ele.hpId}>
                <div className="Main_tuijian_box__left">
                <img src={imgArr[0]}/>
            </div>
            <div className="Main_tuijian_box__right">
                <h3>{ele.title}</h3>
                <h4>{ele.helpType}</h4>
                <p>
                    <span>{ele.updateTime}</span>
                    <span>{str}</span>
                    </p>
            </div>
            </li></Link>)
        })
        return arr
    }

    render(){
        let l
        if(this.props.type==1){
            l=this.showlist(this.state.list1)
        }
        if(this.props.type==2){
            l=this.showlist(this.state.list2)
        }
        return(
            <ul>
                {l}
            </ul>
        )
    }

}

MainHelpItemList.defaultProps={

}

export default MainHelpItemList