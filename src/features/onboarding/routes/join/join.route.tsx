import { Layout } from "../../layout";
import { PinInput, HStack, PinInputField, Heading } from "@chakra-ui/react";
import { styles } from "./join.styles";

export default function JoinRoute() {
  return (
    <Layout>
      <Heading>Enter Code</Heading>
      <HStack>
        <PinInput {...styles.pinInput}>
          <PinInputField {...styles.pinInputField} />
          <PinInputField {...styles.pinInputField} />
          <PinInputField {...styles.pinInputField} />
          <PinInputField {...styles.pinInputField} />
        </PinInput>
      </HStack>
    </Layout>
  );
}
