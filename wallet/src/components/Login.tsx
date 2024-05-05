import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Lisklogo from "../../public/Lsiklogo.svg"

import { Input } from "@/components/ui/input"


const Login =()=>{
    return(
        <div className=" w-full h-full flex flex-col justify-around  items-center">
<Image src={Lisklogo} alt=""/>
<h2>MAKE IT SAFE WITH LISK</h2>
<div className="w-full flex flex-col items-center gap-8 justify-center">
<Input type="password" placeholder="Passowrd" className="text-start w-3/4  border-b-2 border-collapse bg-transparent "/>
<Button variant='default' size='lg' >UNSEAL</Button>

</div>

<div className="flex justify-end pr-10 items-end w-full">

<Button variant='link'>Forget Password</Button>

</div>
            

        </div>
    )
}

export default Login;