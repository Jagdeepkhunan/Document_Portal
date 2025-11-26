import 'server-only'
import { cookies } from 'next/headers'

/* Catuation #####################

( https://nextjs.org/docs/app/api-reference/functions/cookies#good-to-know )
- cookies is an asynchronous function that returns a promise. 
- Can only Change/Modify/Delete In a Server Action 
  or Route Handler(files like route.ts)

*/


export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = 'mysession' ;  //  await encrypt({ userId, expiresAt })
  const cookieStore = await cookies()
 
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function getUser( ) {
    const session = (await cookies()).get('session')?.value ; 
    console.log("get user det -- session : ", session ) ;
    
}