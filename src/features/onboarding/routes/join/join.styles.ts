import type {
  PinInputFieldProps,
  PinInputProps,
  StackProps,
} from "@chakra-ui/react";

interface Styles {
  pinInput: Omit<PinInputProps, "children">;
  pinInputField: PinInputFieldProps;
  hStack: StackProps;
}

export const styles: Styles = {
  pinInput: {
    focusBorderColor: "purple.500",
  },
  pinInputField: {
    borderColor: "whiteAlpha.200",
    _hover: {
      borderColor: "whiteAlpha.300",
    },
  },
  hStack: {},
};
