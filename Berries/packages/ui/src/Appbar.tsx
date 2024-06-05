import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between border-b px-4 border-slate-300 bg-[#764abc] shadow-lg">
        <div className="flex">
            <div className="flex flex-col justify-center">
                <BerryIcon/>
            </div>
            <div className="text-3xl flex flex-col justify-center font-mono font-bold text-indigo-50 hover:tracking-wider">
                Berries-Wallet
            </div>
        </div>
        <div className="flex flex-col justify-center pt-3 pb-3">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}

function BerryIcon() {
    return <svg
    width="35"
    height="35"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 5H19V19H16L16 8H5V5Z" fill="#85f058" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 19C12.7614 19 15 16.7614 15 14C15 11.2386 12.7614 9 10 9C7.23858 9 5 11.2386 5 14C5 16.7614 7.23858 19 10 19ZM10 16C11.1046 16 12 15.1046 12 14C12 12.8954 11.1046 12 10 12C8.89543 12 8 12.8954 8 14C8 15.1046 8.89543 16 10 16Z"
      fill="#85f058"
    />
  </svg>
  }