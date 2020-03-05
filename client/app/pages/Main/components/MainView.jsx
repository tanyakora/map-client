import React from 'react';

import {Blind} from '../../Blind';
import {MapListPreview} from '../../MapListPreview';
import {MapListSelected} from '../../MapListSelected';

import rootStyles from './MainView.less';

const MainView = ({}) => (
    <div className="main-container">

        <Blind />

        <div className="col-lg-10 border">

            <MapListSelected />
        </div>

        <div className="col-lg-2">
            <MapListPreview />
        </div>

    </div>
);

export default MainView;