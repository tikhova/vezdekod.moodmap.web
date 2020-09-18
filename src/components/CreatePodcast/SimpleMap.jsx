import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Mood from "../Router/Mood";
import quarantine from '../../quarantine.svg';
import sad from '../../sad.svg';
import sleepy from '../../sleepy.svg';

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Mood
                        imagePath={quarantine}
                        alt={"Карантин"}
                        lat={59.955413}
                        lng={30.337844}
                    />
                    <Mood
                        imagePath={sad}
                        alt={"Грустно"}
                        lat={59.955413}
                        lng={30.397844}
                    />
                    <Mood
                        imagePath={sleepy}
                        alt={"Сонно"}
                        lat={59.985413}
                        lng={30.337844}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;