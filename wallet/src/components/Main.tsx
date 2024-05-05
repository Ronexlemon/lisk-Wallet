import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Lisklogo from "../../public/Lsiklogo.svg"
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const Main = () => {
  const tokens = [
    { name: "Celo", value: 100 },
    { name: "USDT", value: 200 },
    { name: "USDC", value: 400 }
  ];

  return (
    <div className="w-full h-full flex flex-col gap-8 items-center">
      <div className="flex flex-col h-1/3 justify-around items-center">
        <Image src={Lisklogo} alt="Lisk Logo" />
        <Badge className="h-10 w-30 rounded-md px-4 text-md bg-none text-textLinks">$1000 LISK</Badge>
      </div>
      <div className="w-full">
        <Tabs defaultValue="tokens" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-liskPrimary">
            <TabsTrigger value="tokens">TOKENS</TabsTrigger>
            <TabsTrigger value="send">SEND</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="tokens" className="w-full">
            <div className="flex flex-col justify-around w-full gap-8">
              {tokens.map((token, index) => (
                <div key={index} className="flex justify-between pl-10 pr-10 w-full h-full ">
                  <Badge variant="common" className="text-white">{token.name.toUpperCase()}</Badge>
                  <Badge variant="common" className="text-white">$ {token.value}</Badge>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
     
     
    </div>
  );
};

export default Main;
