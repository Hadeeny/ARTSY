import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import user4 from '../assets/user4.png'
import user5 from '../assets/user5.png'
import user11 from '../assets/user11.jpg'
import {motion} from 'framer-motion'

const Users = () => {
    return (
        <div className='space-y-8 py-2 h-[77%] overflow-y-auto'>
            <div className='flex items-center space-x-4'>
                <div>
                    <motion.img src={user2}/>
                </div>
                <div><h3 className='font-semibold'>Ella Flynn</h3><p>Tight bid</p></div>
            </div>
            <div className='flex items-center space-x-4'>
                <div>
                    <motion.img src={user3}/>
                </div>
                <div><h3 className='font-semibold'>Ella Flynn</h3><p>Tight bid</p></div>
            </div>
            <div className='flex items-center space-x-4'>
                <div>
                    <motion.img src={user4}/>
                </div>
                <div><h3 className='font-semibold'>Ella Flynn</h3><p>Tight bid</p></div>
            </div>
            <div className='flex items-center space-x-4'>
                <div>
                    <motion.img src={user5}/>
                </div>
                <div><h3 className='font-semibold'>Ella Flynn</h3><p>Tight bid</p></div>
            </div>
            <div className='flex items-center space-x-4'>
                <div>
                    <motion.img src={user11}/>
                </div>
                <div><h3 className='font-semibold'>Ella Flynn</h3><p>Tight bid</p></div>
            </div>
            <div className='flex items-center space-x-4'>
                <div>
                    <motion.img src={user2}/>
                </div>
                <div><h3 className='font-semibold'>Ella Flynn</h3><p>Tight bid</p></div>
            </div>
        </div>
    )
}

export default Users
