import React, {Component} from 'react';
import ListItem from '../ListItem';
import {data} from '../data';
import ContainerHeader from 'components/ContainerHeader/index';

class StripList extends Component {

    render() {
        return (
            <div>
            {/*<ContainerHeader match={this.props.match} title="Search Results for: "/>*/}
            <div className="animated slideInUpTiny animation-duration-3">
                {data.map((data, index) => (
                    <ListItem key={index} data={data} styleName="card-strip"/>
                ))}
            </div>
        </div>
        );
    }
}

export default StripList;