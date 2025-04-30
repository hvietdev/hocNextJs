import { Button } from "@/components/ui/button"
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
import { fetchCustomers } from "@/app/lib/data"
import FormCreate from "../create-form";

export async function AddDialog() {
   // state
   const customers = await fetchCustomers();
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Create Invoice</Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
               <DialogTitle>Create New Invoice</DialogTitle>
               <DialogDescription>
                  Add info new invoice
               </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
               <FormCreate customers={customers} />
            </div>
         </DialogContent>
      </Dialog>
   )
}
