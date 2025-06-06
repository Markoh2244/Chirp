import { SignedOut,SignedIn, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"

export default function TopNav() {
    return (
      <nav className="flex justify-between items-center p-4">
        <div>Gallery</div>
        <div><SignedOut><SignInButton/></SignedOut>
        <SignedIn><UserButton/></SignedIn></div>
      </nav>
    )
  }