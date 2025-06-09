"use client"

import { SignedOut,SignedIn, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { UploadButton } from "~/utils/uploadthing"


export default function TopNav() {
  const router = useRouter();
    return (
      <nav className="flex justify-between items-center p-4">
        <div>Gallery</div>
        <div className="flex flex-row"><SignedOut><SignInButton/></SignedOut>
        <SignedIn> 
          <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {router.refresh()}}/>
          <UserButton/>
         </SignedIn></div>
      </nav>
    )
  }