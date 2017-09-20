



class RootComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
        return (
            <div>
               {this.props.children}
            </div>
        )
    }
}
//定义默认属性


export default RootComponent