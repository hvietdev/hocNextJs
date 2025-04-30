
import { Button } from "@/components/ui/button"
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data"
import EditInvoiceForm from "../edit-form";
import { notFound } from "next/navigation";

export async function EditDialog({ id }: { id: string }) {
   /**
     * fetch the invoice  detail and list customers
     */
   const [invoice, customers] = await Promise.all([
      fetchInvoiceById(id),
      fetchCustomers(),
   ]);
   if (!invoice) {
      notFound();
   }

   return (
      <Dialog open={true}>
         <DialogTrigger asChild>
            <Button className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Create Invoice</Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
               <DialogTitle>Update a Invoice</DialogTitle>
               <DialogDescription>
                  Update
               </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
               <EditInvoiceForm invoice={invoice} customers={customers} />
            </div>
         </DialogContent>
      </Dialog>
   )
}
