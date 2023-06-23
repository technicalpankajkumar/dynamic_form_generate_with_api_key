import React from 'react';
import Input from '../fields/Input'
import Radio from '../fields/Radio'
import Checkbox from '../fields/Checkbox';
import Button from '../fields/Button';
import Select from '../fields/Select';
import File from '../fields/File';
import Textarea from '../fields/Textarea';

export default function Field({control,...rest}){
    
    switch(control){
        case 'input':
              return <Input {...rest}/>
        case 'radio':
              return <Radio  {...rest}/>
        case 'checkbox':
              return <Checkbox  {...rest}/>
        case 'select':
              return <Select {...rest}/>
        case 'textarea':
              return <Textarea {...rest}/>
        case 'button':
              return <Button {...rest}/>
        case 'file':
              return <File {...rest}/>
        default :
              return null;      
    }
}