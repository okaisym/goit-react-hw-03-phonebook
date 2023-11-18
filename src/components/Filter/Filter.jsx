import React from 'react';
import {Label, Input} from '../App/App.styled'

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Label htmlFor="findInput">Find contacts by name:</Label>
      <Input
        type="text"
        id="findInput"
        name="find"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
 
export default Filter;