"use client";

export const Header = () => {
  return (
    <header>
      <button
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        {localStorage.getItem("ss-token")? "Hello user!" : `Login →`}
      </button>
      {localStorage?.getItem("ss-token") ? <button
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        onClick={()=>localStorage.removeItem("ss-token")}
      >
        Logout
      </button> : null}
    </header>
  )
}