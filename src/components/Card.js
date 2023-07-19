
import { Props } from "./Props"
export const Card = ({name,number,email}) => {

    return (
        <div className="flex justify-evenly">
            <Props text={`${name}`}/>
            <Props text={`${number}`}/>
            <Props text={`${email}`}/>
        </div>
    )
}