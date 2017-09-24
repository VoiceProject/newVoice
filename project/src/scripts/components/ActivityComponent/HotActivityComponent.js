
import Fetch from '../../modules/fetch'

class HotActivityComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            num:1,
            list:[]
        }
    }
    componentWillMount(){
        this.getData()
    }
    getData(index=this.state.num){
        let time=new Date().getTime()
        Fetch.Get("http://api.12355.net/activity/publisher/list?pageIndex="+index+"&pageSize=10&_="+time+"",{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            let newJson=this.state.list
            let concatArr=newJson.concat(json.dataList)
            this.setState({
                list:concatArr
            })
        })
    }
    showList(){
        let arr=[]
        this.state.list.forEach(ele=>{
            arr.push(<li>
                
                <div className="ActivityHot_box__item--left">
                    <img src={ele.photoUrl}/>
                </div>
                <div className="ActivityHot_box__item--right">
                    <h4>{ele.fullName}</h4>
                    <p>
                        <b>{(ele.activityAverageScore).toFixed(1)}分</b>
                        <span>{ele.activityScoreCount}人已评</span>
                    </p>
                    <p>
                        <span>{ele.answerQuestionCount}人已关注</span>
                    </p>
                </div>
            </li>)
        })
        return arr
    }
    addList(){
        this.setState({
            num:++this.state.num
        })
        this.getData(this.state.num)
    }
    render(){
        return(
            <div className="ActivityHot_box bg-white">
                <h3 className="Main_tuijian_box__title">
                    <span>{this.props.title}</span>
                    <a href="#" className="a_next"></a>
                </h3>
                <ul>
                    {this.showList()}
                </ul>
                <div className="ActivityHot_box--seeMore" onClick={this.addList.bind(this)}>
                    <span >
                        查看更多
                    </span>
                </div>
            </div>
        )
    }
}

HotActivityComponent.defaultProps={
    title:"人气主办方"
}

export default HotActivityComponent