import { Button } from "@/components/ui/button"
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   // DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import Form from "../create-form"
import { fetchCustomers } from "@/app/lib/data"
import { DialogClose } from "@radix-ui/react-dialog";

export async function AddDialog({ id }: { id: String }) {
   const customers = await fetchCustomers();
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Create Invoice</Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[525px]">
            {
               id ? (
                  <DialogHeader>
                     <DialogTitle>Update a Invoice</DialogTitle>
                     <DialogDescription>
                        Update
                     </DialogDescription>
                  </DialogHeader>
               ) :
                  (
                     <DialogHeader>
                        <DialogTitle>Create New Invoice</DialogTitle>
                        <DialogDescription>
                           Add info new invoice
                        </DialogDescription>
                     </DialogHeader>
                  )
            }

            <div className="grid gap-4">
               <Form customers={customers} />
            </div>
            <DialogFooter className="sm:justify-start">
               <DialogClose asChild>
                  <Button type="button" variant="secondary">
                     Close
                  </Button>
               </DialogClose>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
}
