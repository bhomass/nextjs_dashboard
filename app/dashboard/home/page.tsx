'use client'

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { load_nct } from '@/app/server/action'
import { useState, useTransition } from "react";
// import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition();
  const [nct_num, set_nct_num] = useState('')
  const path = "/dashboard/nct_panel"

  function jump_to(){
    console.log('jump to')
    router.push(`/dashboard/nct_panel?nct_num=${nct_num}`);
  }

  return (<div>
  <TextField
    id="search-bar"
    className="text"
    onKeyDown={(e)  => {if (e.key === 'Enter') {
      startTransition(() => jump_to())
      }
    }}
    onChange={e => {
      set_nct_num(e.target.value)
    }}
    label="Enter a NCT number"
    variant="outlined"
    placeholder="Search..."
    size="small"
  />
  <IconButton type="submit" aria-label="search">
    <SearchIcon style={{ fill: "blue" }} onClick= {jump_to}
  />
  </IconButton>
  <p>e.g. NCT04414150</p>
</div>);
}