import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }

    toggle = () => {
        this.setState({visible: !this.state.visible});
    };

    render() {
        let nodes, classObj;
        let visible = this.state.visible;
        let {childNodes, title} = this.props.node;

        if (childNodes != null) {
            nodes = childNodes.map(function(node, index) {
                return <li key={index}><App node={node} /></li>
            });

            classObj = {
                togglable: true,
                "toggle-down": visible,
                "toggle-up": !visible
            };
        }

        return (
            <div>
                <div onClick={this.toggle} className={"node-link "+classNames(classObj)+(title ? '' : ' hide')}>
                    {title}
                </div>
                <ul className={(visible ? '' : 'hide')}>
                    {nodes}
                </ul>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        node: state
    }
}

export default connect(mapStateToProps)(App)