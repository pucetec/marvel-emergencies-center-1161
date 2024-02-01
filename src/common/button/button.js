import { Button, ButtonGroup } from '@chakra-ui/react'

const InsertButton = ({ onClick }) => {
    return (
        <Button colorScheme='blue' size='sm' onClick={onClick}>Insertar</Button>
    );
};

export default InsertButton;