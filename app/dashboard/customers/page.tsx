'use client'

import Button from "@mui/material/Button";
import call_me from '@/app/server/action'
import { useState, useTransition } from "react";

export default function Page() {
  const [isPending, startTransition] = useTransition();
  return (
    <div>
      <p>Customers Page</p>
      <Button onClick={() => startTransition(() => call_me())}>button_0</Button>
    </div>
    );
  }
