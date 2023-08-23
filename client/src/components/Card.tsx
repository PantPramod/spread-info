
type propType = {
    info: {
        name: string,
        email: string,
        company: string,
        contact: string,
        address: string,
        color: string,
        position: string,
        varient?: "dark" | "light"
        _id?: string
    },
    OnClick?: () => void
}
const Card = ({ info, OnClick }: propType) => {
    const varients = {
        dark: <div
            onClick={OnClick}
            key={info._id}
            style={{ background: `${info?.color}` }}
            className={`border border-dashed shadow-2xl mt-10 bg-[${info?.color}] rounded-md  min-h-[200px] p-4 relative  md:w-[500px] mx-auto`}>
            <h1 className='text-center py-4 text-3xl text-blue-800'>{info?.company}</h1>

            <h2 className='mt-4 text-xl text-green-600 text-center'>{info?.name}</h2>
            <p className='mt-1 text-xl text-green-600 text-center '>{info?.position}</p>
            {info.address && <p className='text-xs text-gray-500 pb-10 w-1/2 text-center mx-auto mt-4'>
                <strong>Address:</strong>   {info?.address}
            </p>}
            <div className='flex justify-between absolute bottom-2 left-4  right-4'>
                <h3 className='text-right text-xs text-gray-300'>{info?.email}</h3>

                <p className='text-right text-xs text-gray-300'>{info?.contact}</p>
            </div>

        </div>,
        light: <div
        onClick={OnClick}
        style={{ background: `${info?.color}` }}   
            className={`border border-dashed shadow-2xl mt-10 bg-white rounded-md  min-h-[200px] p-4 relative  md:w-[500px] mx-auto`} >
            <h1 className='text-center py-4 text-3xl text-blue-800 font-bold'>{info?.company}</h1>

            <h2 className='mt-4 text-xl text-black text-center'>{info?.name}</h2>
            <p className='mt-1 text-xl text-black text-center '>{info?.position}</p>
            <p className='text-xs text-black pb-10 w-1/2 text-center mx-auto mt-4'>
                <strong>Address:</strong>   {info?.address}
            </p>
            <div className='flex justify-between absolute bottom-2 left-4  right-4'>
                <h3 className='text-right text-sm text-black'>{info?.email}</h3>

                <p className='text-right text-xs text-black'>{info?.contact}</p>
            </div>
        </div>
    }
    return (
        <>
            {varients[info?.varient ? info?.varient : "dark"]}
        </>
    )
}

export default Card
