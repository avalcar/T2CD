import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function ListItem({styleName, data}) {
    const {image, name, designation, description} = data;
    return (
        <div className={`user-list d-flex flex-row  ${styleName}`}>
            <Avatar
                alt='...'
                src={image}
                className="user-avatar avatar-shadow"
            />
            <div className="description">
                <h1 className="mt-3 mb-0">Gerrit Van Der Wende</h1>
                <div className="row">
                    <div className="col-md-4">
                        <p className="meta-date mb-0">Enroled on 07-15-2018</p>
                    </div>
                    <div className="col-md-8">
                        <p className="meta-date mb-0">Last login: <b>07-17-2018</b></p>
                    </div>
                    <div className="col-md-12">
                        <p className="meta-date mb-0">Active Session: <b>2 - Track your Food</b></p>
                    </div>
                </div>
                <ul className="list-inline d-sm-flex flex-sm-row jr-mbtn-list ml-0">
                    <li>
                        <IconButton color="primary" aria-label="Delete">
                            <i class="zmdi zmdi-account-circle"></i>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton color="secondary" aria-label="Delete">
                            <i class="zmdi zmdi-comments"></i>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton color="primary" aria-label="Delete">
                            <i class="zmdi zmdi-email"></i>
                        </IconButton>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default ListItem;