import { chakra } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

export const BottomSheet = ({ children, show, onClose, ...props }: any) => {
  const ref = useRef(null);

  useEffect(() => {}, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <chakra.div
            pos="fixed"
            bottom="0"
            left="0"
            w="100%"
            h="100%"
            backdropBlur={20}
            bg="rgba(0,0,0,0.1)"
            display="flex"
            alignItems="end"
            zIndex={1000}
            overflow="hidden"
          >
            <chakra.div
              onClick={onClose}
              pos="fixed"
              bottom="0"
              left="0"
              w="100%"
              h="100%"
              background="rgba(0,0,0,0.1)"
              backdropFilter={"blur(100px)"}
              zIndex={1001}
            />
            <motion.div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "70vh",
                display: "flex",
                alignItems: "end",
                zIndex: 1002,
              }}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.y > 200 || velocity.y > 200) {
                  onClose();
                }
              }}
            >
              <chakra.div
                w="100%"
                h="70vh"
                bg="background.light"
                borderRadius="2rem 2rem 0 0"
                shadow="xl"
                pos="relative"
              >
                <chakra.div
                  pos="absolute"
                  top="1rem"
                  left="50%"
                  transform="translateX(-50%)"
                  w="3rem"
                  h=".2rem"
                  bg="whiteAlpha.500"
                  borderRadius="1rem"
                />
              </chakra.div>
            </motion.div>
          </chakra.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
