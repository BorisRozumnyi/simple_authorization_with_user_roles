import React, { useState } from 'react';

export const InputOutline = ({
  label,
  type = 'text',
  value,
  setValue,
}) => {
  const [focus, setFocus] =
    useState(false);

  return (
    <div
      className={`input-group input-group-outline my-3 ${
        focus && 'is-focused'
      } ${value && 'is-filled'}`}
    >
      <label className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        onChange={setValue}
        name={label}
        autoComplete="on"
      />
    </div>
  );
};
