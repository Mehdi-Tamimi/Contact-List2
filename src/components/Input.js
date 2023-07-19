

export const Input = ({Placeholder,Ref,handleChange}) => {

    return (
        <input onChange={handleChange} ref={Ref} className="p-2 rounded-md border-2 border-violet-950 mx-2 outline-none" placeholder={Placeholder}/>
    )
}