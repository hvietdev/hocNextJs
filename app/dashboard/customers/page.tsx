import { fetchRevenue } from "@/app/lib/data";

export default async function Page() {
  const revenue = await fetchRevenue();
  console.log("v:", revenue);
  
   return <p>Customers Page</p>
 }