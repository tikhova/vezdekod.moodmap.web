import React from "react";
import "./Mood.css"

class Mood extends React.Component {
    render() {
        return <div className="mood_holder">
            <img className={"mood_image"} src={this.props.imagePath} alt={this.props.alt}/>
        </div>;
    }
}

export default Mood;