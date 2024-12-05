
import { FcGoogle } from "react-icons/fc";

import useAuth from "../../hooks/useAuth";
import useAxisPublic from "../../hooks/useAxisPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn}=useAuth();
    const axisPublic = useAxisPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name:result.user?.displayName
            }
            axisPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data)
                navigate('/')
            })
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>
          
            <FcGoogle />
           
            </button>
        </div>
    );
};

export default SocialLogin;