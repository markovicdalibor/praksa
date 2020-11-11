import React, { Component } from 'react';




class Form extends React.Component {
    render() {
        return (
            <form action="#">
                <label for="fname">FIRST NAME<span>*</span></label><br/>
                <input type="text" id="fname" name="firstname"/><br/>

                <label for="lname">LAST NAME<span>*</span></label><br/>
                <input type="text" id="lname" name="lastname"/><br/>

                <label for="email">WORK EMAIL<span>*</span></label><br/>
                <input type="text" id="email" name="email"/><br/>

                <label for="com">COMPANY<span>*</span></label><br/>
                <input type="text" id="com" name="company"/><br/>

                <label for="csize">COMPANY SIZE<span>*</span></label><br/>
                <select id="csize" name="csize">
                    <option value="large"></option>
                    <option value="large">large</option>
                    <option value="medium">medium</option>
                    <option value="small">small </option>
                    <option value="micro">micro</option>
                </select><br/>
                <label for="phone">PHONE<span>*</span></label><br/>
                <input type="text" id="phone" name="phone"/><br/>

                <input type="submit" value="SUBMIT"/>
            </form>
        );
    }
}


export default Form;