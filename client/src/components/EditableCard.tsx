import { Dispatch, SetStateAction } from "react";




type propType = {
    info: {
        name: string,
        email: string,
        company: string,
        contact: string,
        address: string,
        color: string,
        position: string,
        varient: "dark" | "light"|"brown"

    }
    setInfo: Dispatch<SetStateAction<{ name: string; email: string; company: string; contact: string; address: string; color: string; position: string; varient: "dark" | "light"|"brown" }>>
}


const EditableCard = ({ info, setInfo }: propType) => {

    const varients = {
        dark: <form
            style={{ background: `${info?.color}` }}
            className={`border border-dashed shadow-2xl mt-10 bg-black rounded-md  min-h-[200px] p-4 relative  md:w-[500px] mx-auto`}>

            <input
                type="text"
                className="text-center py-4 text-3xl placeholder:text-blue-800 text-blue-800 outline-none w-full bg-transparent"
                placeholder="Company Name"
                value={info.company}
                onChange={(e) => setInfo({ ...info, company: e.target.value })}
                autoComplete="off"

            />

            <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full mt-4 text-xl placeholder:text-green-600 text-green-600 text-center outline-none bg-transparent"
                value={info.name}
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                autoComplete="off"
            />

            <input
                type="text"
                placeholder="Your Role"
                className="w-full mt-1 text-xl placeholder:text-green-600 text-green-600 text-center outline-none bg-transparent"
                value={info.position}
                onChange={(e) => setInfo({ ...info, position: e.target.value })}
            />
            <p className='text-xs text-gray-500 pb-10 w-1/2 text-center mx-auto mt-4'>

                <textarea
                    placeholder="Enter Your address here" className="w-full outline-none text-center min-h-[60px] bg-transparent"
                    value={info.address}
                    onChange={(e) => setInfo({ ...info, address: e.target.value })}
                ></textarea>

            </p>
            <div className='flex justify-between absolute bottom-2 left-4  right-4'>
                {/* <h3 className='text-right text-sm text-black '>pramodpant100@gmail.com</h3> */}
                <input
                    type="text"
                    placeholder="Your Email Id"
                    className=" text-sm text-gray-300 bg-transparent w-1/2 outline-none"
                    value={info.email}
                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Your Mobile Number"
                    className=" text-sm text-gray-300 bg-transparent w-1/2  text-right outline-none"
                    value={info.contact}
                    onChange={(e) => setInfo({ ...info, contact: e.target.value })}
                />

            </div>

        </form>,
        light: <form
            style={{ background: `${info?.color}` }}
            className={`border border-dashed shadow-2xl mt-10 bg-white rounded-md  min-h-[200px] p-4 relative  md:w-[500px] mx-auto`}>

            <input
                type="text"
                className="text-center py-4 text-3xl placeholder:text-blue-900 text-blue-900 font-bold outline-none w-full bg-transparent"
                placeholder="Company Name"
                value={info.company}
                onChange={(e) => setInfo({ ...info, company: e.target.value })}
                autoComplete="off"

            />

            <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full mt-4 text-xl placeholder:text-black text-black text-center outline-none bg-transparent"
                value={info.name}
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                autoComplete="off"
            />

            <input
                type="text"
                placeholder="Your Role"
                className="w-full mt-1 text-xl placeholder:text-black text-black text-center outline-none bg-transparent"
                value={info.position}
                onChange={(e) => setInfo({ ...info, position: e.target.value })}
            />
            <p className='text-xs text-gray-500 pb-10 w-1/2 text-center mx-auto mt-4'>

                <textarea
                    placeholder="Enter Your address here" className="w-full outline-none text-center min-h-[60px] bg-transparent text-black placeholder:text-black"
                    value={info.address}
                    onChange={(e) => setInfo({ ...info, address: e.target.value })}
                ></textarea>

            </p>
            <div className='flex justify-between absolute bottom-2 left-4  right-4'>
                {/* <h3 className='text-right text-sm text-black '>pramodpant100@gmail.com</h3> */}
                <input
                    type="text"
                    placeholder="Your Email Id"
                    className=" text-sm text-black placeholder:text-black bg-transparent w-1/2 outline-none"
                    value={info.email}
                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Your Mobile Number"
                    className=" text-sm text-black placeholder:text-black bg-transparent w-1/2  text-right outline-none"
                    value={info.contact}
                    onChange={(e) => setInfo({ ...info, contact: e.target.value })}
                />

            </div>

        </form>,
        brown:<form
        style={{ background: `${info?.color}` }}
        className={`border border-dashed shadow-2xl mt-10 bg-white rounded-md  min-h-[200px] p-4 relative  md:w-[500px] mx-auto`}>

        <input
            type="text"
            className="text-center py-4 text-3xl placeholder:text-blue-900 text-blue-900 font-bold outline-none w-full bg-transparent"
            placeholder="Company Name"
            value={info.company}
            onChange={(e) => setInfo({ ...info, company: e.target.value })}
            autoComplete="off"

        />

        <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full mt-4 text-xl placeholder:text-green-600 text-green-600 text-center outline-none bg-transparent"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            autoComplete="off"
        />

        <input
            type="text"
            placeholder="Your Role"
            className="w-full mt-1 text-xl placeholder:text-green-600 text-green-600 text-center outline-none bg-transparent"
            value={info.position}
            onChange={(e) => setInfo({ ...info, position: e.target.value })}
        />
        <p className='text-xs text-gray-500 pb-10 w-1/2 text-center mx-auto mt-4'>

            <textarea
                placeholder="Enter Your address here" className="w-full outline-none text-center min-h-[60px] bg-transparent text-gray-200 placeholder:text-gray-200"
                value={info.address}
                onChange={(e) => setInfo({ ...info, address: e.target.value })}
            ></textarea>

        </p>
        <div className='flex justify-between absolute bottom-2 left-4  right-4'>
            {/* <h3 className='text-right text-sm text-black '>pramodpant100@gmail.com</h3> */}
            <input
                type="text"
                placeholder="Your Email Id"
                className=" text-sm text-white placeholder:text-white bg-transparent w-1/2 outline-none"
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />

            <input
                type="text"
                placeholder="Your Mobile Number"
                className=" text-sm text-white placeholder:text-white bg-transparent w-1/2  text-right outline-none"
                value={info.contact}
                onChange={(e) => setInfo({ ...info, contact: e.target.value })}
            />

        </div>

    </form>
    }

    return (<>
        {varients[info?.varient]}
    </>
    )
}

export default EditableCard


