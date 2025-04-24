import { fetchRevenue } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Customer | Acme Dashboard',
};

export default async function Page() {
  const revenue = await fetchRevenue();
  console.log("v:", revenue);
  
   return <p>Customers Page</p>
 }