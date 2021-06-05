import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { Container } from "./styles";
import { useWindowSize } from "../../hooks";
import NumberFormat from "react-number-format";

function NumberFormatCustom(props) {
  const { inputRef, onChange, scale, id, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
            floatValue: values.floatValue,
          },
        });
      }}
      thousandSeparator={"."}
      decimalSeparator={","}
      isNumericString
      allowNegative={id === "allowNegative" ? true : false}
      decimalScale={scale}
    />
  );
}

export default function Input(props) {
  const {
    label = "label",
    unit = "Kg",
    variant = "outlined",
    name,
    error,
    handleChange,
    value,
    disabled = false,
    allowNegative = false,
    scale = 2,
  } = props;

  const size = useWindowSize();

  return (
    <Container size={size}>
      <TextField
        disabled={disabled}
        fullWidth
        label={label}
        InputProps={{
          endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
          inputComponent: NumberFormatCustom,
        }}
        onChange={handleChange}
        value={value}
        variant={variant}
        error={!!error}
        helperText={error}
        name={name}
        placeholder="0,00"
        id={allowNegative ? "allowNegative" : "notAllowNegative"}
        inputProps={{ scale }}
        size={"small"}
      />
    </Container>
  );
}
