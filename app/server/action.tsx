'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
// import fetch from 'node-fetch';

export async function load_nct(nct_number: string) {
  console.log('you clicked', nct_number);
  const response = await fetch(`http://tensorbox:9001/nct/?nct_id=${nct_number}`);
  const data = await response.json();
  console.log('response=', data);
  
  // call python server to retrieve NCT criteria
//   revalidatePath('/dashboard') // Update cached posts
//   redirect(`/dashboard`) // Navigate to the new post page

  return data
}
