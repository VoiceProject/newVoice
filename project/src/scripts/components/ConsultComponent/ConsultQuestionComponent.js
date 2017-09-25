
import MainQuestionItemList from "../MainComponent/MainQuestionComponent/MainQuestionItemList.js"
import Fetch from '../../modules/fetch'


class ConsultQuestionComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            word:"本地",
            type:3
        }
    }
    changeListItem(str,Type){
        this.setState({
            word:str,
            type:Type
        })
        
    }
    render(){

        return(
            <div className="MainQuestion_box bg-white">
                <h3 className="Main_tuijian_box__title">
                    <span onClick={this.changeListItem.bind(this,"本地",3)} className={this.state.word=="本地"?"on":""}>本地</span>
                    <span  onClick={this.changeListItem.bind(this,"精华",2)} className={this.state.word=="精华"?"on":""}>精华</span>
                    <span onClick={this.changeListItem.bind(this,"热门",1)} className={this.state.word=="热门"?"on":""}>热门</span>
                </h3>
                <MainQuestionItemList type={this.state.type} />
            </div>
        )
    }
}

ConsultQuestionComponent.defaultProps={
    
}


export default ConsultQuestionComponent