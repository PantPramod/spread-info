

type propType = {
    children: React.ReactNode
}
const Layout = ({ children }: propType) => {
    return (
        <div className="min-h-screen bg-emerald-900">
            {children}
        </div>
    )
}

export default Layout
