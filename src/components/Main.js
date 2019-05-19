import React from 'react';
import Title from './Title';
import Photowall from './Photowall';
import { Route } from 'react-router-dom';
import AddPhoto from './AddPhoto';





class Main extends React.Component{
    constructor(){
        super();
    }

    render(){
        console.log("props from Main", this.props);
        
    return (

        <div>
            <Route exact path='/' render={() => (
                <div>
                <Title title = {'Fotowall'}/>
                    <div className="photoGrid">
                        <div className="row">

                            <Photowall {...this.props}/> 
                            
                        </div>
                    </div>
                </div>
            )}/>
                
            {/* <Route path="/AddPhoto"render={() =>(<div><AddPhoto/></div> )} */}

             <Route path="/AddPhoto" render = { ({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )} />
                    
        </div>
        )
    }
}

export default Main;