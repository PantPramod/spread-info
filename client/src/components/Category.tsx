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
            className='mt-4 cursor-pointer'
            key={category.title}
            onClick={() => navigation(category.redirect)}
        >
            <img
                src={category.url}
                alt={category.url}
                className='' />
            <p className='text-center text-white'>{category.title}</p>
        </div>
    )
}

export default Category
