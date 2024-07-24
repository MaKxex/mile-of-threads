import { ReactNode } from "react";
import { cn } from "@/lib/utils"
export default function ContentBlock(
    {title, shortDescription = '', children , className}: 
    {title: string, shortDescription?: string, children: ReactNode, className?:string}) {

    const classes = cn(
        className 
    );

    return (
        <div className={classes}>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl ml-5">{title}</h1>
                <div >
                    <h1 className="text-2xl truncate">{shortDescription}</h1>
                </div>
            </div>
            {children}
        </div>
    );
}
