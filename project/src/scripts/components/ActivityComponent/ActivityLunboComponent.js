

import Fetch from '../../modules/fetch'
class ActivityLunboComponent extends React.Component{
    constructor(props,context){
        super(props,context)
            this.state={
                imgArr:[]
            }
        
    }
    componentWillMount(){
        this.getImage()
    }
    getImage(){
        let that=this
        // console.log(time)
        if(that.state.imgArr.length==0){
            Fetch.Get("http://api.12355.net/imageManager/findImageByType?did="+that.props.position_info.did+"&type=1&acticey=1&_="+that.props.position_info.nowTime+"",{
            }).then(res=>{return res.json()}).then(json=>{
                // console.log(json)
                    that.setState({
                        imgArr:json.dataList
                    })
            })
        }else{
            that.setState({
                imgArr:imgArr
            })
        }
        
    }
    showImage(){
        let arr=[]
        this.state.imgArr.forEach((ele)=>{
            arr.push(
                <div className="swiper-slide"><img src={ele.path} onClick={this.toUrl.bind(this,ele.url)}/></div>
            )
        })
        return arr
    }
    toUrl(url){
        window.location.href=url
    }
    render(){
        return(
            <div className="swiper-container--lunobo">
                <div className="swiper-wrapper">
                   {this.showImage()}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    compoentDidMount(){
             
    }
    componentDidUpdate(){
        this.state.swiper = new Swiper ('.swiper-container--lunobo', {
            direction: 'horizontal',
            autoplay:3000,
            loop:true
            // 如果需要分页器
        
          })  
        this.state.swiper.update()
    }
    
}

export default ActivityLunboComponent