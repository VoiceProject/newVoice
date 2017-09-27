import Fetch from "../../modules/fetch"

class PersonComment extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            list:[],
            page:0,
            total:""
        }
    }
    componentWillMount(){
        this.getData(1)
    }
    getData(num){
        let id=this.props.id
        Fetch.Get("http://api.12355.net/pc/help/getPostPage?id="+id+"&page="+num+"&rows=5&_="+this.props.time+"",{}).then(res=>{
            return res.json()
        }).then(json=>{
            //console.log(json)
            let listArr=this.state.list
            
            this.setState({
                list:listArr.concat(json.rows),
                page:this.state.page+5,
                total:json.total
            })

            if(json.total>=this.state.page){
                this.getData(++num)
            }
        })
    }
    showView(){
        let arr=[]
        this.state.list.forEach(ele=>{
            arr.push(<li>
                <div className="imgDiv">
                    <div className="i">
                        <img src={ele.photoUrl}/>
                    </div>
                    
                </div>
                <div className="contentDiv">
                    <h3><span className="person_name">{ele.realname}</span>
                    <span>{ele.createTime}</span>
                    </h3>
                    <p>{ele.content}</p>
                </div>
            </li>)
        })
        return arr
    }
    render(){
        return(
            <div className="comment_box bg-white">
                <h2><span>评论（{this.state.total}）</span><a href="#">我也要评论</a></h2>
                <ul>    
                    {this.showView()}
                </ul>
                <div className="dataOver">全部数据加载完毕</div>
        </div>
        )
        
    }
}
PersonComment.defaultProps={
    time:new Date().getTime()
}
export default PersonComment