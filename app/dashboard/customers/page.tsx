'use client'

import Button from "@mui/material/Button";
import {load_nct} from '@/app/server/action'
import { useState, useTransition } from "react";
import { redirect } from 'next/navigation'

export default function Page() {
  const [isPending, startTransition] = useTransition();
  return (
    <div>
      <p>Customers Page</p>
      <Button onClick={() => startTransition(() => load_nct('dddd'))}>button_0</Button>
    </div>
    );
  }
