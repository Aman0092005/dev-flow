

interface FormInputProps{
    type: string,
    placeholder: string,
    value: string,
    setValue: (value: string) => void
}


function Forminput({type, placeholder, value, setValue}: FormInputProps)
{
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} required />
    );
}





export default Forminput;