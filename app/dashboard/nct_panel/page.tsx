// import { Card } from '@/app/ui/dashboard/cards';
// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import TrialCriteria from '@/app/ui/nct_panel/trial-criteria';
import { lusitana } from '@/app/ui/fonts';
// import { 
//   fetchLatestInvoices,
//   fetchCardData 
// } from '@/app/lib/data';
import { useEffect, useState } from "react";
import { load_nct } from '@/app/server/action';

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string }
}) {
  // const latestInvoices = await fetchLatestInvoices();
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();
  const nct_num = searchParams.nct_num;
  console.log('param')
  console.log(nct_num)
  const criteria_str = await load_nct(nct_num)
  const criteria = JSON.parse(criteria_str);
  // console.log('criteria=',criteria)
  // console.log(typeof criteria)
  const inclusions = criteria['inclusions']
  // console.log('inclusions = ', inclusions)
  const exclusions = criteria.exclusions

  return (
    <main>
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Trial {nct_num}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <TrialCriteria inclusions={inclusions} exclusions = {exclusions} />
      </div>
    </main>
  );
}