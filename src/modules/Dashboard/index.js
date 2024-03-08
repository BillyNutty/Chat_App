import Client from '../../assets/client.png';


const Dashboard = () => {
    const contacts = [
        {
            name: 'Rick',
            status: 'Available',
            img: Client
        },
        {
            name: 'Mary',
            status: 'Available',
            img: Client
        },
        {
            name: 'John',
            status: 'Available',
            img: Client
        },
        {
            name: 'Adam',
            status: 'Available',
            img: Client
        },
        {
            name: 'Alex',
            status: 'Available',
            img: Client
        },
        {
            name: 'Larry',
            status: 'Available',
            img: Client
        },
    ]
  return (
    <div className='w-screen flex'>
        <div className='w-[25%] h-screen bg-secondary'>
            <div className='flex items-center my-8 mx-14'>
              <div className="border border-primary p=[2px] rounded-full"><img src={Client} width={75} height={75} /></div> 
                <div className='ml-8'>
                    <h3 className='text-2xl'>Messenger</h3>
                    <p className='text-lg font-light'>My Account</p>
                </div>
            </div>
            <hr/>
            <div className='mx-14 mt-10'>
                <div className='text-primary text-lg'>Messages</div>
                <div>
                   {
                    contacts.map(({name, status, img}) => {
                        return(
                            <div className='flex items-center py-8 border-b border-b-gray-300'>
                            <div className='cursor-pointer flex items-center'>    
                            <div className="border border-primary p=[2px] rounded-full"><img src={img} width={60} height={60} /></div> 
                            <div className='ml-6'>
                               <h3 className='text-lg font-semibold'>{name}</h3>
                               <p className='text-sm font-light text-gray-600'>{status}</p>
                              </div>
                              </div>
                          </div>
                        )
                    })
                   }
                </div>
            </div>
        </div>
        <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
            <div className='w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14'>
                <div className='cursor-pointer'><img src={Client} width={60} height={60}/></div>
                <div className='ml-6 mr-auto'>
                    <h3 className='text-lg'>Alexander</h3>
                    <p className='text-sm font-light text-gray-600'>online</p>
                </div>
               <div className='cursor-pointer'>
                <svg xnlns="http://www.w3.org/2000/svg" className='icon icon-tabler icon-tabler-phone-outgoing' width='24' height='24' viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l3 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2  2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <line x1="15" y1="9" x2="20"  y2="4" />
                <polyline points="16 4 20 4 20 8" />
                </svg>
            </div>
            </div>
        </div>
        <div className='w-[25%] h-screen'></div>
    </div>
  )
}

export default Dashboard