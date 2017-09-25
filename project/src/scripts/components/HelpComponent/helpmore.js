

class Helpmore extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            
        }
    }
    showdata(){
        let arr=[];
        this.props.data.forEach((item,i)=>{
            arr.push(<li><img src={item.photoUrl}/><span>{item.name}</span></li>)
        })
        return arr;
    }
    render(){
        return (
          <div className="help_more">
              <ul>
                {this.showdata()}
              </ul>
          </div>
        )
    }
}
//定义默认属性
Helpmore.defaultProps={

}



export default Helpmore