import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import useAxisPublic from "../../hooks/useAxisPublic";


const SignUp = () => {
const axisPublic = useAxisPublic();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {createUser , updateUserProfile}=useContext(AuthContext);
  const navigate=useNavigate()

  const onSubmit = data => {
    console.log(data);
    createUser(data.email , data.password ,)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name , data.photoURL)
      .then(()=>{
          const userInfo = {
            name: data.name,
            email:data.email,
          }
          axisPublic.post('/users',userInfo)
          .then(res=>{
            if(res.data.insertedId){
              console.log('user added to the data base')
              reset();
              Swal.fire({
                icon: "success",
                title: "User created Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
            }
          })
      

      })
      .catch(error => console.log(error))

    })

  }
    const [showPassword , setShowPassword]=useState(false)
    return (
      <div>
      <>
      <Helmet>
        <title>Sign Up | Alim's World </title>
      </Helmet>
    </>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body w-96">
        <div className="form-control">
        <h1 className="text-4xl text-pink-600 font-bold mb-8">Sign Up</h1>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name",{ required: true })} placeholder="name" className="input input-bordered shadow-lg" required />
          {errors.name && <span>This Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="photo" {...register("photoURL" ,{ required: true })} placeholder="photo url" className="input input-bordered shadow-lg"  />
          {errors.photo && <span className="text-pink-600">This Photo URL is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email",{ required: true })} placeholder="email" className="input input-bordered shadow-lg"  />
          {errors.email && <span className="text-pink-600">This email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={ showPassword ? "text" : "password"} {...register("password" ,{ required: true })} placeholder="password" className="input input-bordered shadow-lg"  />
          <span className="mx-72 -my-8 mb-5" onClick={()=>setShowPassword(!showPassword)}>
            {
              showPassword ?<IoMdEye/> : <IoMdEyeOff  />
            }
          </span>
          {errors.password && <span className="text-pink-600">This password is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2 -mb-4">
          <button className="btn bg-pink-600 hover:bg-accent text-white">Sign Up</button>
        </div>
      </form>
     <div className="mx-auto ">
          <label className="label">
            <p className="text-slate-400 -my-3 mb-4">Already have an account ?<span className="text-pink-600 "><Link to={'/signin'}>Login</Link></span></p>
          </label>      
     </div>
    </div>
  </div>
</div>
</div>

    );
};

export default SignUp;