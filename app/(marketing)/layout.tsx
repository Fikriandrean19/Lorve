import React from "react"
import Navbar from "@/app/(marketing)/components/layout/Navbar"
import Footer from "@/app/(marketing)/components/Footer/Footer"
import FooterBottom from "./components/Footer/FooterBottom"


export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    <FooterBottom />
    </>
  )
}
