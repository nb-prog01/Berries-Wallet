import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "./lib/auth";
import { Quote } from "../components/Quote";
import luffy from "../asset/luffy.png";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/dashboard')
  } else {
    return(
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        
        <div className="pt-20 pl-10 w-10/12 h-10/12 ">
        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8105260c-cfc1-463e-b35b-5de2d500fac9/df9wgvg-801e4bc3-486b-47e4-8cbe-6399082ce140.png/v1/fill/w_809,h_560/luffy___nika___gear_5_by_caiquenadal_df9wgvg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYwIiwicGF0aCI6IlwvZlwvODEwNTI2MGMtY2ZjMS00NjNlLWIzNWItNWRlMmQ1MDBmYWM5XC9kZjl3Z3ZnLTgwMWU0YmMzLTQ4NmItNDdlNC04Y2JlLTYzOTkwODJjZTE0MC5wbmciLCJ3aWR0aCI6Ijw9ODA5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EsZtlByyzE5ZPoRUDcRc4SyhvXJNx27eQ3lEDR5RPmk' alt="image"/>

        </div>
        <div className="hidden lg:block">
            <Quote/>
        </div>



      </div>
    )
  }
}