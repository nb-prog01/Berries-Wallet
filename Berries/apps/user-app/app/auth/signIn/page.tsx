"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/centre";
import { TextInput } from "@repo/ui/textinput";
import { useRef, useState } from 'react';
import { Button } from '@repo/ui/button';

export default function() {
    const router = useRouter();
    const username=useRef("");
    const password=useRef("");

    return <div>
        <Center>
            <Card title="Signin">
                <div className="min-w-72 pt-2">
                    <TextInput type="text" placeholder={"Phone Number"} label="Phone Number" onChange={(value) => (
                        username.current=value)} />
                    <TextInput type="password" placeholder={"Password"} label="Password" onChange={(value) => (
                        password.current=value)
                    } />
                    <div className="pt-4 flex justify-center">
                    <Button onClick={async () => {
                        const res = await signIn("credentials", {
                                    phone:username.current,
                                    password:password.current,
                                    redirect:true,
                                    callbackUrl:"/dashboard"
                                });
                        console.log(res);
                        console.log(username.current,password.current)
                        router.push("/")
                        }}>Login with Phone Number</Button>
                    </div>
                </div>
            </Card>
        </Center>

        
    </div>
}