import { Button } from "./ui/button";

const SuggestedPerson = () => {
    return ( 

        <div className="flex items-center justify-between">
            <div>
                Info
            </div>
            <div>
                <Button variant={"secondary"}>Follow</Button>
            </div>
        </div>
     );
}
 
export default SuggestedPerson;