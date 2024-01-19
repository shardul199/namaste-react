import React from 'react';
import User from './User'
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent Did Mount");
    }
    render(){
        console.log("Parent Render")
        return (
            <div>
                <h1>About</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1 className='text-lg font-bold'>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is React series</h2>
                <UserClass name = {"First"} location = {"Bengaluru"}/>
                
            </div>
        )

    }
}

export default About;