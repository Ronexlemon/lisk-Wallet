import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Lisklogo from "../../public/Lsiklogo.svg"


const LandingPage =()=>{
    return(
        <div className=" w-full h-full flex flex-col justify-around  items-center">
<Image src={Lisklogo} alt=""/>
<h2>MAKE IT SAFE WITH LISK</h2>
<Button size="lg">Create Account</Button>
<div className="flex justify-end pr-10 items-end w-full">

<Button variant='link'>Import Account</Button>

</div>
            

        </div>
    )
}

export default LandingPage;