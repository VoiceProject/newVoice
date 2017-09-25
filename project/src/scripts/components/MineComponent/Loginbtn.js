
import {Link} from 'react-router';
class Loginbtn extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
        }
    }
   
    render(){
        return (
          <div className="loginbtn">
                <img/>
                <span>
                    <button> <Link to="/login">登录</Link></button>
                    <button><Link to="/register">注册</Link></button>
                </span>
          </div>
        )
    }
}
//定义默认属性
Loginbtn.defaultProps={

}



export default Loginbtn