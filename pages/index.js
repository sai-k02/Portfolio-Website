import Header from './header'

import {useSession, signIn, signOut } from "next-auth/react"
import GitHub from 'next-auth/providers/github';

export default function Home() {
  const { data: session } = useSession();

  if(session){
    return (
      
        <>
        <button onClick={() => signOut("github")}>Sign Out</button>
        <Header />
        </>
    )
  }
  return(
    <>
        <button onClick={() => signIn("github")}>Sign in with Github</button>
        <Header />
        </>
  )

}