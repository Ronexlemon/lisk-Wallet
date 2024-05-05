import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Lisklogo from "../../public/Lsiklogo.svg"

import { Input } from "@/components/ui/input"


const CreatePaswword =()=>{
    return(
        <div className=" w-full h-full flex flex-col justify-around  items-center">
<Image src={Lisklogo} alt=""/>
<h2>MAKE IT SAFE WITH LISK</h2>
<div className="w-full flex flex-col items-center gap-8 justify-center">
<Input type="password" placeholder="Passowrd" className="text-center w-3/4"/>
<Input type="password" placeholder="Confirm Passowrd" className="text-center w-3/4"/>

</div>

<div className="flex justify-end pr-10 items-end w-full">

<Button variant='accent'>Next</Button>

</div>
            

        </div>
    )
}

export default CreatePaswword;