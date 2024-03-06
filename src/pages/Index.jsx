import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Flex, Icon } from "@chakra-ui/react";
import { FaCheck, FaRocket, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.900" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            SaaSify
          </Heading>
        </Flex>

        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="ghost">
            Features
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Pricing
          </Button>
          <Button colorScheme="teal">Sign Up</Button>
        </Stack>
      </Flex>

      {/* Hero */}
      <Flex direction="column" align="center" maxW="800px" margin="0 auto" mt={16} mb={16}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Supercharge Your Business with SaaSify
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={8}>
          Streamline your operations, boost productivity, and grow your business with our powerful SaaS platform.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Flex>

      {/* Features */}
      <Box p={4}>
        <Stack spacing={4} as={Box} maxW="3xl" textAlign="center" margin="0 auto">
          <Heading as="h2" size="xl" mt={8} mb={4}>
            Key Features
          </Heading>
          <Flex wrap="wrap" justify="center">
            <Box p={6} maxW="320px">
              <Icon as={FaRocket} boxSize={12} color="teal.500" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Fast Setup
              </Heading>
              <Text fontSize="lg">Get up and running in minutes. No complex installation required.</Text>
            </Box>
            <Box p={6} maxW="320px">
              <Icon as={FaCheck} boxSize={12} color="teal.500" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Intuitive Interface
              </Heading>
              <Text fontSize="lg">Easy to use dashboard with all the tools you need at your fingertips.</Text>
            </Box>
            <Box p={6} maxW="320px">
              <Icon as={FaChartLine} boxSize={12} color="teal.500" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Powerful Analytics
              </Heading>
              <Text fontSize="lg">Gain valuable insights into your business performance.</Text>
            </Box>
          </Flex>
        </Stack>
      </Box>

      {/* CTA */}
      <Box textAlign="center" mt={12} mb={12}>
        <Heading as="h2" size="xl" mb={6}>
          Ready to Revolutionize Your Business?
        </Heading>
        <Button colorScheme="teal" size="lg">
          Start Free Trial
        </Button>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" py={8} textAlign="center">
        <Text>&copy; 2023 SaaSify. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
