import 'server-only'
import { cookies } from 'next/headers'

/* Catuation #####################

( https://nextjs.org/docs/app/api-reference/functions/cookies#good-to-know )
- cookies is an asynchronous function that returns a promise. 
- Can only Change/Modify/Delete In a Server Action 
  or Route Handler(files like route.ts)

*/


export async function createSession(session: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const cookieStore = await cookies()
 
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax', // this flag prevent csrf attack on latest browsers only
    path: '/',
  })
}

export async function getSession( ) {
    const session = (await cookies()).get('session')?.value ; 
    // console.log("get user det -- session : ", session ) ;
    return session;
}

export async function deleteSession( ){ 
    const deleteSession = (await cookies()).delete("session") // .clear()	-	Deletes all cookies
    console.log(" deleteSession : " ) ; 
    return true ;
}