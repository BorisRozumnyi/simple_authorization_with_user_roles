import React, {
  useEffect,
  useState,
} from 'react';
import {
  FormControl,
  InputGroup,
  Label,
} from './Input.styles';

export const InputOutline = ({
  label,
  type = 'text',
  value,
  setValue,
  error,
}) => {
  const [isFocused, setIsFocused] =
    useState(false);
  const [isFilled, setIsFilled] =
    useState(false);

  useEffect(() => {
    setIsFilled(Boolean(value));
  }, [value]);

  return (
    <InputGroup
      isFocused={isFocused}
      isFilled={isFilled}
    >
      <Label
        isFocused={isFocused}
        isFilled={isFilled}
      >
        {label}
      </Label>
      <FormControl
        isFocused={isFocused}
        isFilled={isFilled}
        type={type}
        onFocus={() =>
          setIsFocused(true)
        }
        onBlur={() =>
          setIsFocused(false)
        }
        value={value}
        onChange={setValue}
        name={label}
      />
      {error?.msg && <p>{error.msg}</p>}
    </InputGroup>
  );
};
