import { useNavigate } from "react-router-dom"

type propTypes = {
    category: {
        redirect: string,
        title: string,
        url: string

    }
}
const Category = ({ category }: propTypes) => {
    const navigation = useNavigate()
    return (
        <div
            className='mt-4 '
            key={category.title}

        >
            <img
                onClick={() => navigation(category.redirect)}
                src={category.url}
                alt={category.url}
                className='cursor-pointer w-full h-[200px] object-cover hover:scale-105 transition-all ease-in-out duration-300' />
            <p className='text-center text-white mt-4'>{category.title}</p>
        </div>
    )
}

export default Category
