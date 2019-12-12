import React from 'react';

class InputBox extends React.Component{
    state={
        total:this.props.total,
        myList: [0],
        checked: 1
    }
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    } 
    //Get props from parent component
    //using getDerivedStateFromProps life cycle hook, to check if the prop has changed
    //https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    static getDerivedStateFromProps(nextProps, prevState){
        //To checked if the props really be changed
        if(nextProps.total !== prevState.total){         
            //remember to use Number here to set string to int, otherwise the array cannot be created
            //To create an array whose length is the value we add, and add number
            var temp=Array.from(Array(Number(nextProps.total)).keys())
            return {total:nextProps.total, myList: temp,checked:0}
        }else return null
    }
    handleOnClick(e){
        //if check one more checkbox add one
        if(e.target.checked===true){
            this.setState({
                checked: this.state.checked+1
            })
        }else{
            //minus one if uncheck one more checked box
            this.setState({
                checked:this.state.checked-1
            })
        }
    }
  /*  componentDidUpdate(){
    }*/

    render(){
        //https://reactjs.org/docs/refs-and-the-dom.html
        if(this.state.checked === 0){
            //get the html node and unchecked all checked boxes
            var node=this.myRef.current;
            //select all the DOM element whose class name is check-box
            var tempNode=node.querySelectorAll('.check-Box');
            tempNode.forEach(element => {
                element.checked=false
            });
        }

        return(
                <div ref={this.myRef}>
                    {/* We need to add li here to avoid error*/}
                    {/*map each item in myList to a input checkbox*/}
                    {this.state.myList.map(item=> {return <li key={item}><input type="checkbox" onClick={this.handleOnClick.bind(this)} className="check-Box"/></li>})}
                    <p> you have checked {this.state.checked} boxes</p>
                </div>
        )
    }
}

export default InputBox;