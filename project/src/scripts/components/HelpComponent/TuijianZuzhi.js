
import Fetch from '../../modules/fetch'
class TuijianZuzhi extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            list:[]
        }
    }
    componentWillMount(){
        this.getData()
    }
    getData(){
        let time=new Date().getTime()
        Fetch.Get("http://api.12355.net/pc/help/findOrganization?page=1&rows=6&sort=attention_count+&order=desc&_="+time+"",{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            console.log(json)
            this.setState({
                list:json.rows
            })
        })
    }
    showList(){
        let arr=[];
        
        let starStr="★★★★★☆☆☆☆☆"
        this.state.list.forEach(ele=>{
           let rate=ele.helpAverageScore;           
            arr.push(<li>
                <div className="Main_tuijian_box__left">
                <img src={ele.photoUrl}/>
            </div>
            <div className="Main_tuijian_box__right">
                <h3>{ele.name}</h3>
                <h4>
                    <span>{starStr.slice(5 - rate, 10 - rate)}</span>
                    {ele.helpScoreCount}人已评</h4>
                <p>
                    <span>已解决求助{ele.solveHelpCount}次</span>
                    <span>{ele.attentionCount}关注</span>
                    </p>
            </div>
            </li>)
        })
        return arr
    }
    render(){
        return(
            <div className="Help_Zuzhi_box bg-white">
                <h3 className="Main_tuijian_box__title">
                    <span>{this.props.title}</span>
                    <a href="#/activity" className="a_next"></a>
                </h3>
                <ul>
                    {this.showList()}
                </ul>
            </div>
        )
    }
}
TuijianZuzhi.defaultProps={
    title:'推荐组织'
}

export default TuijianZuzhi