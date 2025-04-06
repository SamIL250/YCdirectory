import Navbar from "../components/Navbar";

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return(
        <main>
            <Navbar />
            <div className="px-5 md:px-32 lg:px-62 py-10">
            {children}
            </div>
        </main>
    );
}

export default Layout;