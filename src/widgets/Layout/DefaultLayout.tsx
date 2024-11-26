import React from "react"

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main >
      <div>
        {children}
      </div>
    </main>
  )
}

export default DefaultLayout
