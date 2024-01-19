import React from "react"

class UserClass extends React.Component {
    constructor (props) {
        super(props);
        
        
        console.log(this.props.name+"Child constructor")
       this.state = {
        userInfo:{
        name:"Dummy",
        location: "default",
        avatar_url:"https//:nfngfsk.com"
        },
       }

    }

     async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shardul199")
        const json = await data.json();
        console.log(json)

        this.setState({
            userInfo: json,
        })
        // console.log(this.props.name+"Child Did Mount");
    }

    componentDidUpdate(){
        console.log("Component did update");
    }
    
    render() {
        console.log(this.state.userInfo)
       const { login, location, avatar_url } = this.state.userInfo
       
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {login}</h2>
                <h3>Location: {location}</h3>
                <h4>contact: shardulbhardwaj001@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;