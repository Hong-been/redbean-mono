'use client'

import { Button } from "@radix-ui/themes"
import { useRouter } from "next/navigation"

export function AuthButton() {
  const router = useRouter()
  
  return (
    <Button onClick={() => router.push('/auth')}>Get Snow Step</Button>
  )
} 