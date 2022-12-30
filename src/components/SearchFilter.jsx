// import search from '..assets/search.svg'
import search from "../assets/search.svg";
import angle from "../assets/angle.svg";

const SearchFilter = () => {
    return (
        <div className='w-full flex items-center'>
            <div className='hidden md:block w-3/12 relative'>
                <img width='20rem' className='absolute top-[0.7rem] left-2' src={search}/> 
                <input type='text' className='bg-gray-100 w-10/12 py-2 pl-10 outline-none rounded-md' placeholder='Search'/>
            </div>
            <div className='w-full md:w-9/12  p-4 shadow-lg 
            flex items-center justify-between' >
                <h2 className='text-xl font-semibold'>See 1-6 of 15 results</h2>
                <button className='border flex items-center border-black px-6 py-2'>
                    
                    Sort by <img className='ml-3' src={angle}/></button>
            </div>
        </div>
    )
}

export default SearchFilter
