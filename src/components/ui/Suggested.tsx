import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

const SuggestedUsers = () => {
    return ( 
        <div className="hidden md:block w-full  h-fit sticky top-20 pt-5 col-span-3 ">
        <div className="w-full">
          <Card className="bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border p-5  border-primary/10  rounded-2xl">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
     );
}
 
export default SuggestedUsers;