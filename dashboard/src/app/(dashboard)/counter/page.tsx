
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Francis",
  description: "Generated by Francisco",
  keywords: ["Counter", "Francis"],
};


export default function Counter (){
    return (
        <>
        <h1 className='text-3xl font-bold underline'>counter</h1>
        </>
    )
}