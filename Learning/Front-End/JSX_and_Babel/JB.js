class Myhead extends React.Component{
    render(){
        return <div className="head" style={{color:this.props.color}}>Hello World {this.props.level}</div>;
    }
}

class MyheadList extends React.Component{
    render(){
        return <div>
            <Myhead level="1" color="red" />    
            <Myhead level="2" color="green" />    
            <Myhead level="3" color="blue" />    
        </div>;
    }
}

window.addEventListener("load", ()=>{
    let elem=<MyheadList />;
    ReactDOM.render(
        elem, document.body
    );
});