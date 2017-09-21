import Fetch from '../../modules/fetch'

class MainActivityComponent extends React.Component{
    constructor(props,context){
        super(props,context)
            this.state={
                swiper:null
            }
        
    }
    render(){
        return(
            
                
            <div className="swiper-container--activity full-height">
            <div className="swiper-wrapper swiper-wrapper--activity">
                <div className="swiper-slide swiper-slide--activity1">
                    <li>
                        <h3>志愿服务</h3>
                        <img src="http://www.gd12355.org/wechat/public/img/izhiyuan.png"/>
                    </li>
                    <li>
                        <h3>人气主办方</h3>
                        <img src="http://www.gd12355.org/wechat/public/img/twoBlock02.png"/>
                    </li>
                    <li>
                        <h3>热门主办方</h3>
                        <img src="http://www.gd12355.org/wechat/public/img/remenzhuanjia.png"/>
                    </li>
                </div>
                <div className="swiper-slide swiper-slide--activity2"><li>
                        <h3>热门活动</h3>
                        <img src="http://www.gd12355.org/wechat/public/img/rmhd02.png"/>
                    </li>
                    <li>
                        <h3>就业实习</h3>
                        <img src="http://www.gd12355.org/wechat/public/img/zhanchiwang2.png"/>
                    </li>
                    <li>
                        <h3>男生女生</h3>
                        <img src="http://www.gd12355.org/wechat/public/img/hunlianjiaoyou.png"/>
                    </li>
                    </div>
            </div>
            
            <div className="swiper-pagination"></div>
            </div>
                
            
        )
    }

    componentDidMount(){
        this.state.swiper = new Swiper('.swiper-container--activity', {
            direction: 'horizontal',
            paginationClickable:true,
            // loop:true,
            // 如果需要分页器
            pagination: '.swiper-pagination'
          }) 
    }
    componentDidUpdate(){
        this.state.swiper.update()
    }
}

export default MainActivityComponent