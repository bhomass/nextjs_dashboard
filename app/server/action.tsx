'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
 
export default async function call_me(nct_number: string) {
  console.log('you clicked', nct_number);
  revalidatePath('/dashboard') // Update cached posts
  redirect(`/dashboard`) // Navigate to the new post page
}