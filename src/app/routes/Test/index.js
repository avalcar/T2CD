import React, { Component } from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox';

class Test extends Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Test Container"/>
                <div className="row">
                    <CardBox heading='Test Page' styleName="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <div>Test</div>
                            </div>
                        </div>
                    </CardBox>
                </div>
            </div>
        );
    }
}

export default Test;