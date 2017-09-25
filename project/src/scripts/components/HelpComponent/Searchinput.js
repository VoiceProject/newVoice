import Fetch from '../../modules/fetch'
import {Link} from 'react-router';
class Searchinput extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            inputwidth:'100%',
            value:'',
            json:{}
        }
    }
   search(){
        this.setState({
            inputwidth:'77%'
        })
   }
    inputvalue(e){
        this.setState({
            value:e.target.value
        })
    }
    searchkeyword(){
        let that=this;
        let {value,json}=this.state;       
        let time=new Date().getTime();
        Fetch.Get('http://api.12355.net/activity/offlineActivity/list?sitenavDid=440000&keywords='+value+'&pageIndex=1&pageSize=6&_='+time+'',{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            console.log(json);
            that.setState({
                json:json
            })
        })
    }
    render(){
        let {inputwidth}=this.state;
        return (
          <div className="search_box">
                <input type="text" placeholder={this.props.alt} onChange={this.inputvalue.bind(this)} onClick={this.search.bind(this)} className={inputwidth=='100%'?'':'search_box__short'} />
                {
                    inputwidth=='77%'?
                    <a onClick={this.searchkeyword.bind(this)}>搜索</a>:''
                }
          </div>
        )
    }
}
//定义默认属性
Searchinput.defaultProps={

}



export default Searchinput