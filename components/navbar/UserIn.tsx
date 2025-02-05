import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Logout from '../iconSVG/Logout';

function UserIn() {
  const { data: session } = useSession();
  return session ? (
    <div className="flex gap-5 items-center">
      <div className="flex gap-1 items-center relative md:cursor-default cursor-pointer">
        <div className="relative group">
          <Image
            src={session.user?.image ?? '/user.svg'}
            alt="Profile"
            width={7}
            height={7}
            className="w-7 h-7 rounded-full"
          />

          <div className="md:hidden block absolute flex-col p-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 bg-sunMedium dark:bg-moonThin text-dark dark:text-light right-0 mt-2 shadow-lg">
            <p className="text-xs">{session.user?.name}</p>
            <p className="text-xs">{session.user?.email}</p>
          </div>
        </div>
        <div className="md:flex hidden flex-col">
          <p className="text-xs">{session.user?.name}</p>
          <p className="text-xs">{session.user?.email}</p>
        </div>
      </div>
      <button
        onClick={() => signOut({ callbackUrl: '/signin' })}
        className="rounded-full transition-all duration-300 hover:bg-sunMedium dark:hover:bg-moonThin p-2"
      >
        <Logout />
      </button>
    </div>
  ) : (
    <span className='text-sm text-light'>loading...</span>
  );
}

export default UserIn;
