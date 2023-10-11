import { Input, InputProps } from "@chakra-ui/react";
import { useField, useFormikContext } from "formik";
import { BaseProps, FormControl } from "formik-chakra-ui";
import { mask as maskText } from "maskarade";
import React, {
  FC,
  FocusEvent,
  ForwardedRef,
  useCallback,
  useEffect,
  useRef,
} from "react";

export type InputControlProps = BaseProps & {
  inputProps?: InputProps;
  mask?: string;
  disabled?: boolean;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};

export const InputControl: FC<InputControlProps> = React.forwardRef(
  (props: InputControlProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { name, label, inputProps, mask, onBlur, ...rest } = props;
    const [field] = useField(name);
    const { setFieldValue } = useFormikContext();

    const firstFieldValue = useRef(field.value);
    firstFieldValue.current = field.value;

    useEffect(() => {
      if (mask) {
        setFieldValue(name, maskText(firstFieldValue.current, mask));
      }
    }, [mask, setFieldValue, name]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value = mask ? maskText(e.target.value, mask) : e.target.value;
        field.onChange(e);
      },
      [field, mask, field.onChange]
    );

    return (
      <FormControl name={name} label={label} {...rest}>
        <Input
          {...field}
          id={name}
          {...inputProps}
          ref={ref}
          onChange={handleChange}
          onBlur={onBlur}
          size="lg"
          py="1.7rem"
          width="530px"
          border="1px solid #595e6b"
          bg="#111725"
          _hover={{
            borderColor: "#fec544"
          }}
          _focus={{
            borderColor: "#fec544"
          }}
        />
      </FormControl>
    );
  }
);
