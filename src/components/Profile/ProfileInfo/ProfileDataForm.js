import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";


const ProfileDataForm = (props) => {
    return <form>
        <div><button onClick={() => {}}>save</button></div>
        <div>
            <b>Full Name</b>: <Field placeholder={"Full Name"} name={"fullName"} component={Input}/>
        </div>
        <div>
            <b>Looking for a job</b>: <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
        </div>
        <div>
            <b>My professional skills</b>:
            <Field placeholder={"My professional skills"} name={"lookingForAJobDescription"} component={Textarea}/>
        </div>
        <div>
            <b>About me</b>:
            <Field placeholder={"About me"} name={"aboutMe"} component={Textarea}/>
        </div>
        {/*<div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>*/}
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;