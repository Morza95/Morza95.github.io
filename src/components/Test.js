import React from 'react';

const Test = () => {
    return (

        
<form>
    <fieldset disabled="disabled">
        <input type="text" name="something" placeholder="enter some text" />
        <select>
            <option value="0" disabled="disabled" selected="selected">select somethihng</option>
            <option value="1">woot</option>
            <option value="2">is</option>
            <option value="3">this</option>
        </select>
    </fieldset>
</form>
    )
}

export default Test;

