import SuggestedPerson from "../SuggestedPerson";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import H1 from "./h1";

const SuggestedUsers = () => {
    return ( 
        <div className="hidden md:block w-full  h-fit sticky top-20 pt-5 col-span-3 ">
        <div className="w-full">
          <Card className="bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border p-3  border-primary/10  rounded-2xl">
            <CardHeader>
              <CardTitle>
                  <div className="text-2xl font-semibold font-sans">Who to follow</div>
                </CardTitle>
            </CardHeader>
            <CardContent>
              <SuggestedPerson/>
            </CardContent>
          </Card>
        </div>
      </div>
     );
}
 
export default SuggestedUsers;