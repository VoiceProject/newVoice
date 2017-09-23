
import {Link} from 'react-router';
class Searchinput extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            inputwidth:'100%'
        }
    }
   search(){
        this.setState({
            inputwidth:'77%'
        })
   }
    render(){
        let {inputwidth}=this.state;
        return (
          <div className="search_box">
                <input type="text" placeholder={this.props.alt} onClick={this.search.bind(this)} className={inputwidth=='100%'?'':'search_box__short'} />
                {
                    inputwidth=='77%'?
                    <a>搜索</a>:''
                }
          </div>
        )
    }
}
//定义默认属性
Searchinput.defaultProps={

}



export default Searchinput