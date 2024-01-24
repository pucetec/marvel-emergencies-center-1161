import { Button, ButtonGroup } from '@chakra-ui/react'

const InsertButton =()=>{
    return (
        <Button colorScheme='blue' size='sm' onClick={()=>alert('click')}>Insertar </Button>
    );
};
export default InsertButton;