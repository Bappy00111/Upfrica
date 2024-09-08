import React from "react";

const Login = () => {
  return (
    <div className="my-10 container flex flex-col justify-center items-center h-screen px-4">
      <div className="bg-white shadow-xl container grid md:grid-cols-2 gap-5 rounded-md md:p-10 lg:p-20 border">
        <div className="col-span-1 ">
            <img src="https://booking.webestica.com/assets/images/element/signin.svg" alt="" />
        </div>
        <div className="col-span-1 md:order-1">
            <div className="text-center space-y-2">
                <img className=" h-10 lg:h-14 mx-auto" src="https://d26ukeum83vx3b.cloudfront.net/assets/upfrica-com-logo-dark-0200279f4edfa75fc643c477221cbe7ea4d4afdd5ac37ed8f22164659d2b0fb9.png" alt="" />
                <h2 className="text-xl lg:text-2xl font-bold">Log in to your account</h2>
                <p className="text-base lg:text-xl ">Or <span className="text-purple-500">sign up for an account</span> </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
