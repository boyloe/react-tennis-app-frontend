import React, { Component } from 'react'

export default class AddNewPlayer extends Component {

    state = {
        newPlayer: {
            name: "",
            age: "",
            skill: "beginner",
            gender: "",
            court_id: 1,
            phone: "",
            imgurl: ""
            
        }
    }


    handleChange = property => event => {
        const newPlayer = this.state.newPlayer
        newPlayer[property] = event.target.value
        this.setState({ newPlayer })
    }

    addPlayer = event => {
        // event.preventDefault()
        const{name, age, skill, gender, court_id, phone,imgurl} = this.state.newPlayer
        this.props.postNewPlayer({ name, age, skill, gender, court_id, phone, imgurl})        
    }

    render() {
        return (
            <div>
                <form className="new-user" onSubmit={this.addPlayer}>
                    <input name="name" type="text" placeholder="Enter Your Name" value={this.state.newPlayer.name} onChange={this.handleChange("name")}/>
                    <input name="age" type="number" placeholder="Enter Your Age" value={this.state.newPlayer.age} onChange={this.handleChange("age")}/>
                    <input name="gender" type="text" placeholder="Enter Your Gender" value={this.state.newPlayer.gender} onChange={this.handleChange("gender")} />
                    <input name="phone" type="text" placeholder="Enter Your Phone Number" value={this.state.newPlayer.phone} onChange={this.handleChange("phone")}/>
                    <select name="skill" id="skill-select" onChange={this.handleChange("skill")}>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                    <select name="court_id" onChange={this.handleChange("court_id")}> 
                        {this.props.courtSelectOption()}
                    </select>
                    <input name="imgurl" type="text" placeholder="Enter Your image URL" value={this.state.newPlayer.imgurl} onChange={this.handleChange("imgurl")}/>      
                    <input type='submit' value="Create Player"/> 
                </form>
                
            </div>
        )
    }
}


