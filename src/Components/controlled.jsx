import { useControllableState, Button, Box } from "@chakra-ui/react";

function Example() {
  const [value, setValue] = useControllableState({ defaultValue: 1 });

  return (
    <div>
      <Button onClick={() => setValue(value - 1)}>-</Button>
      <Box as="span" w="200px" mx="24px">
        {value}
      </Box>
      <Button onClick={() => setValue(value + 1)}>+</Button>
    </div>
  );
}

export default Example;
