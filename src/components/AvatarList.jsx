import React, {Component} from 'react';
import Avatar from "./Avatar";
import "./AvatarList.scss";


class AvatarList extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const elTypes = Avatar.getIcons();
        const self = this;
        return <div className="avatar-list clearfix">
            {Object.keys(elTypes).map(function (i, index) {
                    return <Avatar onClickHandler={self.props.onClickHandler} avatarType={i} avatarSize={"fa-3x"}
                                   avatarColor={"black"} key={i}>
                    </Avatar>
                }
            )
            }
        </div>
    }
}

export default AvatarList;