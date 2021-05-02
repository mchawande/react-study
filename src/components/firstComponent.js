import React, { Component } from 'react';

class FirstComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { isVisible: true };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility(e) {
        e.preventDefault();
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        return (
            <div className="m-3 col-md-4 d-inline-block align-top">
                <button className="btn btn-light mb-3" onClick={this.toggleVisibility}>
                    Toggle { this.props.title } Component
                    </button>
                { this.state.isVisible ? this.cardHtml() : '' }
            </div>
        );
    }

    cardHtml() {
        return <div className="card">
                    <div className="card-body">
                        Hello { this.props.title ? this.props.title : 'Component HTML' }
                    </div>
                </div>;
    }

}

export default FirstComponent;
