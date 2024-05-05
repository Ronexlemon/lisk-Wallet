import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Lisklogo from "../../public/Lsiklogo.svg"
import { CopyIcon } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Badge } from "./ui/badge";
  
import { Input } from "@/components/ui/input"


const SeedPhrase =()=>{
    const seedPhrase = "Hello There its Me Again and I can Get It So what"
    return(
        <div className=" w-full h-full flex flex-col justify-around  items-center">
<Image src={Lisklogo} alt=""/>
<h2>MAKE IT SAFE WITH LISK</h2>
<div className="w-full h-96">
<Card  className=" bg-[#5080A2] m-5 h-[350px]">
    
<div className="grid grid-cols-3 gap-10 p-4">
        {seedPhrase.toUpperCase().split(" ").map((charr,index)=>(

    <Badge variant='primary' className="text-center w-20 h-10 rounded-md px-6" >{charr}</Badge>

           
        ))}
        </div>
        <CardFooter className="flex justify-end">
            
            <CopyIcon color="blue" />
        </CardFooter>

    


</Card>

</div>

<div className="flex justify-end pr-10 items-end w-full">

<Button variant='accent'>Done</Button>

</div>
            

        </div>
    )
}

export default SeedPhrase;