import React from 'react';

import './styles.scss';

export const Input = ({ label, name, ...props }) => (
    <label htmlFor={name}>
        {label} <br /><br />
    <input className="Input" name={name} {...props} />
  </label>
    )

export const AuthInput = ({ label, name, ...props }) => (
    <label>
        {label}<br /> <br />
        <input className="AuthInput" name={name} { ...props} />
    </label>
)
