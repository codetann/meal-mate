import { chakra, useDisclosure } from "@chakra-ui/react";
import { BottomSheet, Button, RainingEmojis } from "@/components";
import { Layout } from "@/features/onboarding/layout";
import { useNavigate } from "react-router-dom";

const foodIcons = [
  "🍒",
  "🍎",
  "🍗",
  "🍌",
  "🍕",
  "🍔",
  "🍟",
  "🍢",
  "🌭",
  "🍽",
  "🍛",
  "🍚",
  "🍙",
  "🍘",
];

export function LandingRoute() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Layout>
      <RainingEmojis emojis={foodIcons} />
      <chakra.div
        pos="relative"
        h="120%"
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <h1>Meal Mate</h1>
        <p>Finding food, made easy</p>
      </chakra.div>
      <chakra.div
        display="flex"
        flexDir="column"
        justifyContent="space-evenly"
        alignItems="center"
        // background="background.light"
        w="100%"
        h="23%"
        maxW="400px"
        borderRadius="1rem "
        p="1rem"
        gap="1rem"
      >
        <Button
          h="100%"
          bg="background.light"
          onClick={() => navigate("/join")}
        >
          Join Friends
        </Button>
        <Button h="100%" bg="#7548df" onClick={() => null}>
          Create Group
        </Button>
      </chakra.div>
      <BottomSheet show={isOpen} onClose={onClose}>
        Hello world
      </BottomSheet>
    </Layout>
  );
}
