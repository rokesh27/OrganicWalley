import axios from "axios";
export const getNames = async () => {
    return await axios.get('${process.env.REACT_APP_API}');
}
export const removeData = async (id) => {
    return await axios.delete('${process.env.REACT_APP_API/${id}}');
}