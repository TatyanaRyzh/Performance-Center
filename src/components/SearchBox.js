import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import { bindActionCreators } from "redux"

import * as constants from "../constants/styles"
import dxTextBox from "devextreme/ui/text_box"
import * as rightActions from "../actions/rightActions"

class SearchBox extends Component {

    componentDidMount() {
        var that = this;
        that.textbox = new dxTextBox(ReactDOM.findDOMNode(this.refs["textBox"]), {
            placeholder: "Type Keywords...",
            onValueChanged: function (e) {
                that.props.rightActions.setRightSearch(e.value.toUpperCase());
            }
        });
    }

    componentWillUpdate(nextProps, nextState) {
        (nextProps.right.clear != this.props.right.clear) && this.textbox.reset();
    }

    render() {
        var cssClass = constants.RIGHT_FILTER_CLASS;

        return <div className={cssClass}>
            <div className ={cssClass + "_text"}> Search: </div>
            <div  className ={cssClass + "_element"}>
                <div ref="textBox"></div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        right: state.right
    }
}

function mapDispatchToProps(dispatch) {
    return {
        rightActions: bindActionCreators(rightActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
