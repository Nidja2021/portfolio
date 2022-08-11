import Navbar from './navbar/Navbar'

function Layout({children}) {

  return (
    <>
        <Navbar />
        <main className="container">
            {children}
        </main>
    </>
  )
}
export default Layout;