import { useFormStatus } from "react-dom";
import { LoadingSpinner } from "./loadingSpinner";

export function SubmitButton() {
   const { pending } = useFormStatus();
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
