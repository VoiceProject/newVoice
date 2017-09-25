import Fetch from '../../modules/fetch'



class AddressBox extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            newsArr:[]
        }
    }
    componentWillMount(){
        this.getImage()
        // console.log(this.props)
    }
    componentWillReceiveProps(props,state){
        // console.log(props.position_info)
    }
    getImage(){
        let that=this
        Fetch.Get("http://api.12355.net/pc/service/index?page=0&rows=6&_="+that.props.position_info.nowTime+"",{
        }).then(res=>{return res.json()}).then(json=>{
            // console.log(json)
            that.setState({
                newsArr:json.rows
            })
        })
    }
    toUrl(quId,username){
        window.location.href="http://www.gd12355.org/wechat/view/find_consult/find_consult_question_detail.html?quId="+quId+"&username="+username+""
    }
    showImage(){
        let arr=[]
        let that=this
        this.state.newsArr.forEach((ele)=>{
            arr.push(
                <div className="swiper-slide address_box--slide" onClick={that.toUrl.bind(that,ele.quId,ele.username)}>
                    <img src={ele.photourl}/>
                    <div className="address_box--word">
                        <h5>{ele.title}</h5>
                        <p>{ele.realname}</p>
                    </div>
                </div>
        )
        })
        return arr
    }
    render(){
        return(
            <div className="address_box">
                <a href="#/searchaddress">
                    <span className="address_box--wordSpan">
                        {this.props.position_info.districtName}
                    </span>
                </a>
                <div className="address_box--right">
                    <div className="swiper-container--news">
                    <div className="swiper-wrapper">
                        {this.showImage()}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.state.swiper = new Swiper ('.swiper-container--news', {
            direction: 'vertical',
            autoplay:3000,
            loop:true
          })        
    }
    componentDidUpdate(){
        this.state.swiper.update()
    }
}


export default AddressBox