import React from 'react';
import {UncontrolledAlert} from 'reactstrap';

const AlertsWithIcons = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <UncontrolledAlert className="alert-addon-card bg-success bg-success text-white shadow-lg">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-cloud-done zmdi-hc-fw zmdi-hc-lg" />
                    </span>

                    <span className="d-inline-block">This is a Success alert — check it out!</span>
                </UncontrolledAlert>

                <UncontrolledAlert className="alert-addon-card bg-danger bg-danger text-white shadow-lg">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-delete zmdi-hc-fw zmdi-hc-lg" />
                    </span>

                    <span className="d-inline-block">This is a Danger alert — check it out!</span>
                </UncontrolledAlert>

                <UncontrolledAlert className="alert-addon-card bg-warning bg-warning text-white shadow-lg">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-headset zmdi-hc-fw zmdi-hc-lg" />
                    </span>

                    <span className="d-inline-block">This is a Warning alert — check it out!</span>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-addon-card bg-info bg-info text-white shadow-lg">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-info zmdi-hc-fw zmdi-hc-lg" />
                    </span>

                    <span className="d-inline-block">This is a Info alert — check it out!</span>
                </UncontrolledAlert>
            </div>
        </div>

    );
};

export default AlertsWithIcons;