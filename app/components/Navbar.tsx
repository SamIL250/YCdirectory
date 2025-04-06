import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
    const session = await auth();

    return(
        <>
            <div className="bg-white shadow flex items-center justify-between py-3 px-10">
                <Link href="/">
                    <h1 className="text-2xl font-bold flex bg-gray-800 p-2 rounded-md">YC-directory</h1>
                </Link>

                <div className="flex items-center justify-center gap-3 text-gray-700">
                    {
                    /* //checking if a user is logged in by checking the user session coming directly from next auth */
                    session && session?.user ? (
                        <>
                            <Link href="/startup/create">Create</Link>
                            <Link href={`/profile/user/${session?.user.id}`}>
                                <span>{session?.user.name}</span>
                                {/* <Image src={session?.user.image} alt="" height={30} width={30}></Image> */}
                            </Link>
                            <form action={() => {
                                signOut
                            }}></form>
                        </>
                    ) : (
                        <>
                        <form action={async () => {
                            'use server'
                            await signIn('github')
                            }} >
                            <button>
                                <span>Sign In</span>
                            </button>
                        </form>
                        </>
                    )
                    }    
                </div>    
                
                
            </div>
        </>
    );
}

export default Navbar;