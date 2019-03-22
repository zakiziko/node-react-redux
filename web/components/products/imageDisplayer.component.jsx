import React,{Component} from 'react';

class ImageDisplayer extends Component{
    render(){
        return(
            <div className="prod-image">
                <img 
                src={require('../../imgs/'+this.props.image)} 
                onMouseOver={(e) => {(e.currentTarget.src = require('../../imgs/'+this.props.image_2))}} 
                onMouseLeave={(e) => {(e.currentTarget.src = require('../../imgs/'+this.props.image))}} 
                alt={this.props.image} />
            </div>
        );
    }
}

export default ImageDisplayer;
