import React from 'react';

class Video extends React.Component {

    constructor(props) {
        super(props);
        this.containerStyle = {
            margin: "0px auto",
            width: "500px",
            height: "375px",
            border: "10px #333 solid"
        };

        this.videoStyle = {
            width: "500px",
            height: "375px",
            backgroundColor: "#666"
        };

        this.video =  React.createRef();

    }

    componentDidMount() {
        let constraints = {video : true, sound : false};
        navigator.getUserMedia(constraints, this.successCallback, this.errorCallback);
    }

    successCallback(stream) {

        var video = document.querySelector("video");
        video.srcObject = stream;

    }

    errorCallback(error) {
        console.log("navigator.getUserMedia error: ", error);
    }

    render() {

        return (
            <div>
                Video Page
                <div id="container" style={this.containerStyle}>
                    <video style={this.videoStyle} ref={this.video} autoPlay="{true}" id="video">

                    </video>
                </div>
            </div>
        );
    }
}


export default Video