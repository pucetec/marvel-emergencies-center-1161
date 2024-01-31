import { Input } from "@chakra-ui/react";

const TextInput=({value,onChange})=>{
    return(
        <Input htmlSize={20} width='auto' mb={6} ml={6} mr={6} mt={6}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Ingrese emergencias"/>
    );
}
export default TextInput;