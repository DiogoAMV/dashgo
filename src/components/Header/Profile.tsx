import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Diogo Marques</Text>
          <Text fontSize="sm" color="gray.300">
            diogo.amv19@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Diogo Marques" />
    </Flex>
  );
}
