
import Fetch from '../../modules/fetch'
// console.log(Fetch)
// Fetch.Get("http://api.12355.net/imageManager/findImageByType?did=440000&type=1&acticey=0&_=1505893234415",{
// }).then(res=>{return res.json()}).then(json=>{
//     console.log(json)
// })


class LunboComponent extends React.Component{
    
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
            Fetch.Get("http://api.12355.net/imageManager/findImageByType?did="+that.props.position_info.did+"&type=1&acticey=0&_="+that.props.position_info.nowTime+"",{
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
        console.log(this.state.imgArr)
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
            paginationClickable:true,
             loop:true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // autoplayDisableOnInteraction:false,
        
          })  
        this.state.swiper.update()
    }
    
}


export default LunboComponent

