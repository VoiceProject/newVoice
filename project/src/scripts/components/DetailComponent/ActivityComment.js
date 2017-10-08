import Fetch from "../../modules/fetch"


class ActivityComment extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            list:[],
            page:6,
            total:"",
            num:1
        }
    }
    componentWillMount(){
        this.getData()
    }
    getData(num=this.state.num){
        if(this.props.id){}
        let id=location.hash.split("?")[1].split("&")[0].replace("activityId=","");
        console.log(id)
        Fetch.Get("http://api.12355.net/activity/comment/list?activityId="+id+"&pageIndex="+num+"&pageSize=6&_="+this.props.time+"",{}).then(res=>{
            return res.json()
        }).then(json=>{
            //console.log(json)
            let listArr=this.state.list
            
            this.setState({
                list:listArr.concat(json.rows),
                page:this.state.page+6,
                total:json.total
            })

            // if(json.total>=this.state.page){
            //     this.getData(++num)
            // }
        })
    }
    showView(){
        let arr=[]
        let style=this.props.style
        this.state.list.forEach(ele=>{
            arr.push(<li>
                <div className="imgDiv">
                    <div className="i">
                        <img src={ele.commentAccPhoto}/>
                    </div>
                    
                </div>
                <div className="contentDiv">
                    <h3><span className="person_name">{ele.commentAccName}</span>
                    <span>{ele.commentTime}</span>
                    </h3>
                    <p>{ele.commentContent}</p>
                    <p style={style.secondP}><span style={style.childSpan}>评论（{ele.childCommentCount}）</span><span style={style.childSpan}>回复</span></p>
                </div>
            </li>)
        })
        return arr
    }
    showMore(){
        this.setState({
            num:++this.state.num
        })
        this.getData(this.state.num)
        console.log(this.state.page)
    }
    render(){
        return(
            <div className="comment_box bg-white">
                <h2><span>评论（{this.state.total}）</span><a href="">我也要评论</a></h2>
                <ul>    
                    {this.showView()}
                </ul>
                 {this.state.page<this.state.total?
                <div className="dataOver" onClick={this.showMore.bind(this)}>查看更多</div>:<div className="dataOver">数据加载完毕</div>} 
        </div>
        )
        
    }
}
ActivityComment.defaultProps={
    time:new Date().getTime(),
    style:{
            childSpan:{
                backgroundPosition: "left center",
                backgroundRepeat:" no-repeat",
                paddingLeft: "0.17rem",
                backgroundSize: "0.15rem",
                paddingRight: '0.12rem',
                backgroundImage: "url(http://www.gd12355.org/wechat/public/img/talk_icon.png)"
            },
            secondP:{
                    margin:" 5px 7.5px"
            }
        }
}


export default ActivityComment