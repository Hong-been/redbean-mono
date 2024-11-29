"use client";

export const Header = () => {
  return (
    <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Examples
      </a>
      <button
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        {localStorage.getItem("ss-token")? "Hello user!" : `Login →`}
      </button>
      {/* {localStorage.getItem("ss-token") ? <button
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        onClick={()=>localStorage.removeItem("ss-token")}
      >
        Logout
      </button> : null} */}
    </header>
  )
}