import {connection} from '@/contact/db.config'
import Talk from '@/contact/model'
import { NextRequest, NextResponse } from 'next/server'


connection()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const { email, message, username, timed} = reqBody
        console.log(reqBody);
        console.log(username);

        const newTalk = new Talk({
            username,
            email,
            message,
            timed
        })

        const savedUser = await newTalk.save()

        // console.log(savedUser);

        

        const response = NextResponse.json({
            message: "success",
            success: true,
            req: reqBody
        })


        return response;

    } catch (error:any) {
        console.log("error here : ",error.message);
    }
}