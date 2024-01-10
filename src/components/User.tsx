import { UserType } from "../types";

type UserProps = {
    user: UserType
}

const User: React.FC<UserProps> = ({user}) => {

    return (
        <div>
            <h3>{user.username}</h3>
        </div>
    )
}

export default User;