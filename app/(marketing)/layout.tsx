import React from "react"
import Navbar from "@/app/(marketing)/components/layout/Navbar"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}
