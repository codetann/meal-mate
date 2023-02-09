import { chakra, useDisclosure } from "@chakra-ui/react";
import { BottomSheet, Button, RainingEmojis } from "@/components";
import { useState } from "react";

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

export function Landing() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <chakra.section
      display="flex"
      h="100vh"
      w="100vw"
      flexDir="column"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
      p="1rem"
    >
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
        {/* {foodIcons.map((icon, i) => (
          <chakra.span
            pos="absolute"
            top={`${Math.random() * 100}%`}
            left={`${Math.random() * 100}%`}
            zIndex={-1}
          >
            {icon}
          </chakra.span>
        ))} */}

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
        <Button h="100%" bg="background.light" onClick={onOpen}>
          Join Friends
        </Button>
        <Button h="100%" bg="#7548df" onClick={onOpen}>
          Create Group
        </Button>
      </chakra.div>
      <BottomSheet show={isOpen} onClose={onClose} />
    </chakra.section>
  );
}
