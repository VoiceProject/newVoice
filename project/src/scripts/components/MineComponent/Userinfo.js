import {connect} from 'react-redux'
import actions from '../../userredux/actions'
class Userinfo extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
   
    render(){
        return (
          <div className="loginbtn">
                <img src="img/noface.gif"/>
                <span>
                   {this.props.userInfo.name}
                </span>
                <button onClick={this.props.exit}>退出</button>
          </div>
        )
    }
}
//定义默认属性
Userinfo.defaultProps={

}



export default connect(state=>state,(dispatch)=>{
	return {
		exit:()=>{
            dispatch({type:'EXIT'})
            location.href="#/mine"
		}
	}
})(Userinfo)