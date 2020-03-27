import React, {Component} from 'react';

import './Logo.scss'


class Logo extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div className={['pets-logo clearfix']}>
            <img src={require('../images/react.jpg')} className={'pets-logo__react'} alt={'React Logo'}/>
            <div style={{display: "inline-block"}} className={"pets-logo__divider"}>&</div>
            <img src={require('../images/drupal-logo2.png')} className={'pets-logo__drupal'} alt={'Drupal Logo'}/>
        </div>
    }
}

export default Logo;