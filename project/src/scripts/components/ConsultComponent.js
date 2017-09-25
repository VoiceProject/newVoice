import Searchinput from './HelpComponent/Searchinput.js'
import Helpmore from './HelpComponent/helpmore'
import FooterComponent from "./FooterComponent"
import ConsultQuestionComponent from "./ConsultComponent/ConsultQuestionComponent.js"

import Fetch from '../modules/fetch'


class ConsultComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            placeholder:"搜索问题",
            datainfo:[],
            remendata:[],
            activedata:[]
        }
    }
    componentWillMount(){
        this.getData()
        this.getremenData();
        this.getactiveData();
    }
    getData(){
            let that=this;
            let time=new Date().getTime()
            Fetch.Get('http://api.12355.net/pc/service/getServiceCategory?rows=4&_='+time+"",{}).then((res)=>{
                return res.json()
            }).then((json)=>{
                let arr=json.rows.splice(0,5)  
                that.setState({
                    datainfo:arr
                })
            })
        }
    //获取热门专家模块与活跃组织板块数据
    getremenData(){
        let that=this;
         let time=new Date().getTime()        
        Fetch.Get('http://api.12355.net/pc/service/findAllExpertAccount?page=0&rows=3&_='+time+'',{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            that.setState({
                remendata:json.rows
            })                        
        })
    }
    getactiveData(){
        let that=this;
         let time=new Date().getTime()        
        Fetch.Get('http://api.12355.net/pc/service/searchOrganization?page=0&rows=3&order=desc&sort=answer_question_count&_='+time+'',{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            that.setState({
                activedata:json.rows
            })                        
        })
    }
    showremenData(){
        let arr=[];
        this.state.remendata.forEach((item,i)=>{
            arr.push(<li><img src={item.photoUrl}/><h2>{item.experName}</h2><h6>{item.expProfession}</h6><p>{item.speciality}</p></li>)
        })
        return arr;
    }
    showactiveData(){
        let arr=[];
        this.state.activedata.forEach((item,i)=>{
            arr.push(<div className="active_div"><img src={item.photoUrl}/><div><h2>{item.fullName}</h2><p>回答问题{item.answerQuestionCount}次</p></div></div>)
        })
        return arr;
    }
    render(){
        return(
           <div className="consult_body">
            <Searchinput alt={this.state.placeholder}/>
            <div className="consult_banner">
                <img src='/img/bannerpic.png'/>
            </div>
            <div className="consult_ques">
                <a className="dajia">问大家</a>
                <a className="zuzhi">问组织</a>
                <a className="zhuanjia">问专家</a>
            </div>
            <Helpmore data={this.state.datainfo}/>
            <ConsultQuestionComponent/>
            <div className="consult_remen">
                <a>热门专家</a>
                <ul>{this.showremenData()}</ul>
            </div>
            <div className="consult_remen consult_active">
                <a>活跃组织</a>
                {this.showactiveData()}
            </div>
            <FooterComponent active="/consult"/>
           </div>
        )
    }
}


export default ConsultComponent;

