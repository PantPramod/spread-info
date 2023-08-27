import { useContext } from 'react'
import { GlobalContext } from '../../components/ContextProvider';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Category from '../../components/Category';
import categories from '../../data/categories';


const Dashboard = () => {
    const { name } = useContext(GlobalContext)
    return (
        <Layout>
            <Header
                name={name}
                page="dashboard"
            />
            <div className='p-4 overflow-y-auto custom-scroll h-[calc(100vh-72px)]'>
                <p className='text-white  '>Categoies</p>
                <div className='flex flex-wrap justify-between w-full'>
                    {categories.map((category) =>
                        <div className='w-[30%] '>
                            <Category category={category} />
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard


export { default as BusinessCard } from './BusinessCard'
export { default as GreetingCard } from './GreetingCard'
export { default as CardPage } from './CardPage'
export { default as AllCards } from './AllCards'
export { default as Resume } from './Resume'
export { default as UploadedCard } from './UploadedCard'





