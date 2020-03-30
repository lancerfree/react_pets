import React, {Component} from 'react';
import './AvatarList.scss';
import './AddNewForm.scss';
import Avatar from "./Avatar";
import AvatarList from "./AvatarList";

class AddNewForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colorList: props.vars.colorList,
            petImageClass: 'fa-cat',
            petNameText: '',
            petDescriptionText: '',
            petColor: '',
        }

        const self = this;
        this.changeImageFormClick = function (e) {
            self.setState({petImageClass: this.props.avatarType})
        }
    }

    render() {
        const formHandler = this.props.submitAddPetForm || ((e, source) => {
        })
        const colors = this.state.colorList;

        return <div className={'add-new-form clearfix'}>
            <AvatarList onClickHandler={this.changeImageFormClick}/>
            <div className={'add-new-form__text-block'}>
                <Avatar
                    avatarType={this.state.petImageClass || "fa-cat"}
                    avatarColor={this.state.petColor || "black"}
                    avatarSize={"fa-9x"}
                    onClickHandler={() => {
                    }}
                />
                <div className={'add-new-form__pet-block_right'}>
                    <label htmlFor="pet_name">Put pet name:&nbsp;<span>{this.state.petNameText}</span></label>
                    <input type="text" maxLength={25} value={this.state.petNameText}
                           onChange={(event) => {
                               this.setState({petNameText: event.target.value});
                           }}
                           name={'pet_name'}/>
                    <label htmlFor="pet_color">Select pet color:&nbsp;<span>{colors[this.state.petColor]}</span></label>
                    <select  className={'pet_color'} name={'pet_color'}
                            value={this.state.petColor}
                            onChange={(event) => {
                                this.setState({petColor: event.target.value});
                            }}
                    >
                        <option value="" disabled key={""}> -- select a color --</option>
                        {Object.keys(colors).map(function (i, index) {
                                return <option value={i} key={i}>{colors[i]}</option>;
                            }
                        )
                        }
                    </select>
                </div>
                <label htmlFor="pet_description">Write a short pet description:&nbsp;
                    <span>{this.state.petDescriptionText.length}</span></label>
                <textarea name={'pet_description'} maxLength={200}
                          value={this.state.petDescriptionText} onChange={(e) => {
                    this.setState({petDescriptionText: e.target.value});
                }}/>
                <button className={'pet-submit-button'}
                        onClick={(e)=>(this.props.handlers.showResult||(()=>{console.log('inner')}))(this,e)}
                >Add Pet
                </button>
            </div>
        </div>
    }
}

export default AddNewForm;