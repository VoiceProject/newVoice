
import Fetch from "../modules/fetch"
import store from '../flux/store'
import actions from '../flux/actions'
class SearchAddress extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            city:[],
            school:[],
            allSchool:[],
            isCity:true,
            search_word:""
        }
    }
    componentWillMount(){
        this.getCity()
        this.getSchool()
    }
    
    getCity(){
        let time =new Date().getTime()
        Fetch.Get("http://api.12355.net/common/district/getDistrictByType?page=1&rows=100&type=1&parentDid=440000&_="+time+"",{}).then(res=>{return res.json()}).then(data=>{
            this.setState({
                city:data.rows
            })
        })
    }
    getSchool(){
        let time =new Date().getTime()
        Fetch.Get("http://api.12355.net/common/district/getDistrictByType?page=1&rows=50&type=2&parentDid=440000&_="+time+"",{}).then(res=>{return res.json()}).then(data=>{
            // this.props.allSchool=data.rows
            this.setState({
                allSchool:data.rows,
                school:data.rows
            })
        })
    }
    changePosition(position_info){
        
        let info ={
            districtName:position_info.districtName,
            did:position_info.did
        }
       
        actions.changePosition(info)
        location.hash="/main"
    }
    showView(arr){
        let tagArr=[]
        let that=this
        arr.forEach(ele=>{
            
            tagArr.push(
                <li data-id={ele.did} className="item-li" onClick={that.changePosition.bind(that,ele)}>
                    <a>
                    {ele.districtName}
                    </a>
                </li>
            )
        })
        return tagArr
    }
    changeComponent(str){
        if(str=="city"){
            this.setState({
                isCity:true
            })
        }else{
            this.setState({
                isCity:false
            })
        }
        
    }
    changeSearchWord(e){
        this.setState({
            search_word:e.target.value
        })
    }
    orderSearchCity(e){
        let that=this
        let newArr=[]
        e.preventDefault()
       this.state.allSchool.forEach(ele=>{
            if(ele.districtName.indexOf(that.state.search_word)>-1){
                newArr.push(ele)
            }
        })
        this.setState({
            school:newArr
        })
    }
    render(){
        return(
            <div className="address__box">
                <div className="address__header">
                    <button className={this.state.isCity?"on":""} onClick={this.changeComponent.bind(this,"city")}>地市</button>
                    <button className={this.state.isCity?"":"on"} onClick={this.changeComponent.bind(this,"school")}>高校</button>
                </div>
                <div className="address__title">
                    <span>{store.position_info.districtName}</span>
                </div>
                <div className="address__body">
                
                    {this.state.isCity?<ul>{this.showView(this.state.city)}</ul>:
                    <ul>
                        <form className="address__body--searchSchool" onSubmit={this.orderSearchCity.bind(this)}>
                            <div className="searchInp__box">
                            <input type="search" placeholder="搜索高校" className="searchInp" onChange={this.changeSearchWord.bind(this)}/>
                            <span></span>
                            </div>
                            <button type="submit" className="searchBtn" >搜索</button>
                        </form>
                        {this.showView(this.state.school)}
                    </ul>
                    
                    
                    }
                 
                </div>
            </div>
        )
    }
}

SearchAddress.defaultProps={
    allSchool:[]
}
export default SearchAddress