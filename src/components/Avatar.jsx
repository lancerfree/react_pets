import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import './Avatar.scss'


class Avatar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            avatarSize: props.avatarSize || "fa-5x",
            avatarType: props.avatarType || "fa-cat not-visible",
            avatarBorderWidth: props.avatarBorderWidth || "3px",
            avatarHover: props.avatarHover || "hover-style-default",
        }
    }

    static getIcons() {
        return {
            "fa-cat": 'Cat', "fa-crow": 'Crow', "fa-dog": "Dog",
            "fa-dove": 'Cat', "fa-dragon": 'Crow',
            "fa-fish": 'Crow', "fa-frog": "Dog",
            "fa-hippo": 'Cat', "fa-horse": 'Crow', "fa-horse-head": "Dog",
            "fa-kiwi-bird": 'Cat', "fa-otter": 'Crow', "fa-paw": "Dog",
            "fa-spider": 'Cat',
        };

    }

    static getBorders() {
        return {
            "avatar_border-red": "First",
            "avatar_border-blue": "Second",

        }
    }

    static getColors() {
        return {
            "red": 'Red',
            "white": 'White',
            'black': 'Black',
            'gray': 'Gray',
            'brown': 'Brown'
        };
    }

    render() {
        const color = this.props.avatarColor || 'black';
        const borderColor = this.state.avatarBorderColor || 'black'
        const border = this.state.avatarBorderWidth + ' solid ' + borderColor;
        return <div className="avatar" onClick={this.props.onClickHandler.bind(this)}>
            <div className={`avatar__icon-wrapper ${this.state.avatarHover}`}
                 style={{borderRadius: "5px", border: border}}>
                <i className={'fas fa-fw ' + this.props.avatarType + ' ' + this.state.avatarSize}
                   style={{color: color}}>
                </i>
            </div>
        </div>
    }
}

export default Avatar;