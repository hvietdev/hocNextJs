import { useFormStatus } from "react-dom";
import { LoadingSpinner } from "./loadingSpinner";
import { toast } from "sonner";

export function SubmitButton() {
   const { pending } = useFormStatus();
   if(!pending){
      toast("Event has been created", {
         description: "Sunday, December 03, 2023 at 9:00 AM",
       })
   }

   return (
      <button
         type="submit"
         disabled={pending}
         className="relative px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
         {pending && (
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
               <LoadingSpinner />
            </span>
         )}
         {pending ? 'Creating...' : 'Create Invoice'}
      </button>
   );
}
