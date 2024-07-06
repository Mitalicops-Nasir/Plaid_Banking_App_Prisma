import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Card, CardFooter, CardHeader } from "../ui/card"
import { BackButton } from "./back-button"
import { Header } from "./header"


export const ErrorCard = () => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader> 
               <Header label="Oops! Something Went wrong!"/>
            </CardHeader>
            <div className="w-full flex justify-center items-center">
              <ExclamationTriangleIcon className="text-destructive"/>
            </div>
            <CardFooter>
                <BackButton label="Back to login" href="/auth/login"/>
            </CardFooter>
        </Card>
    ) 
}