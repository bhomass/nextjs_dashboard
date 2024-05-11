'use client'

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import call_me from '@/app/server/action'
import { useState, useTransition } from "react";
import { redirect } from 'next/navigation'


export default function Page() {
  const [isPending, startTransition] = useTransition();
  const [nct_num, set_nct_num] = useState('')
  return (<div>
  <TextField
    id="search-bar"
    className="text"
    onKeyDown={(e)  => {if (e.key === 'Enter') {
      startTransition(() => call_me(e.target.value))
      // startTransition(() => call_me('1111'))
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
    <SearchIcon style={{ fill: "blue" }} onClick={(e) => {
    startTransition(() => call_me(nct_num))
  }}/>
  </IconButton>
  <p>e.g. NCT04414150</p>
</div>);
}