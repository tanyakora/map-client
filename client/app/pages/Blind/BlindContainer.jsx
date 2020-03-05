import React, { Component } from 'react';
import { connect } from 'react-redux';

import {BlindView} from './components';

import {
    onChangeWidthMap
} from '../../state';

class BlindContainer extends Component {

    constructor(props){
        super(props);

        this.state={
            mouseDown:false
        };

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }


    onMouseDown(  ) {
        this.state.mouseDown=true;
    }

    onMouseUp(  ) {
        this.state.mouseDown=false;
    }

    onMouseMove( event ) {
        const {mouseDown} = this.state;

        if(!mouseDown || event.screenX>event.currentTarget.offsetWidth){
            return;
        }

        const {onChangeWidthMap} = this.props;
        onChangeWidthMap({position : event.screenX});

        this.setState({mouseX : event.screenX});
    }

    render() {

        const {mouseX} = this.state;

        return (
            <div className="col-lg-10 blind-container" onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp} >
                <BlindView left={mouseX} onMouseDown={this.onMouseDown}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    blind_position : state.mapStore.get('blind_position'),
});

const mapDispatchToProps = (dispatch) => ({
    onChangeWidthMap: options => dispatch({type: onChangeWidthMap.SUCCESS, payload:options}),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlindContainer);