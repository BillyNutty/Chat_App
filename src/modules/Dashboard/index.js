import Client from '../../assets/client.png';
import Input from '../../components/Input';
import { useState } from 'react';
import { useEffect } from 'react';


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
    ]

   useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user:detail'))
    const fetchConversations = async() => {
        const res = await fetch(`http://localhost:3001/api/conversations/${loggedInUser?.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const resData = await res.json()
        console.log('resData :>> ', resData);
        setConversations(resData)
    }
    fetchConversations()
   }, [])

    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user:detail')))
    const [ conversations, setConversations ] = useState([]) 
    const [ messages, setMessages ] = useState([])
    console.log('conversations :>> ', conversations);

    const fetchMessages = async(conversationId) => {
        const res = await fetch(`http://localhost:3001/api/message/${conversationId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const resData = await res.json()
        console.log('resData :>> ', resData);
    }

  return (
    <div className='w-screen flex'>
        <div className='w-[25%] h-screen bg-secondary'>
            <div className='flex items-center my-8 mx-14'>
              <div className="border border-primary p=[2px] rounded-full"><img src={Client} width={75} height={75} /></div> 
                <div className='ml-8'>
                    <h3 className='text-2xl'>{user?.fullName}</h3>
                    <p className='text-lg font-light'>My Account</p>
                </div>
            </div>
            <hr/>
            <div className='mx-14 mt-10'>
                <div className='text-primary text-lg'>Messages</div>
                <div>
                   {
                    !conversations.length > 0 ?
                      conversations.map(( conversationId, user ) => {
                        return(
                            <div className='flex items-center py-8 border-b border-b-gray-300'>
                            <div className='cursor-pointer flex items-center' onClick={() => 
                            fetchMessages(conversationId)}>    
                            <div><img src={Client} className='w-[60px] h-[60px] rounded-full p-[2px] border border-primary' /></div> 
                            <div className='ml-6'>
                               <h3 className='text-lg font-semibold'>{user?.fullName}</h3>
                               <p className='text-sm font-light text-gray-600'>{user?.email}</p>
                              </div>
                              </div>
                          </div>
                        )
                      }) : <div className='text-center text-lg font-semibold mt-24'>No Conversations</div>
                   }
                </div>
            </div>
        </div>
        <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
            <div className='w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 shadow-lg'>
                <div className='cursor-pointer'><img src={Client} width={60} height={60}/></div>
                <div className='ml-6 mr-auto'>
                    <h3 className='text-lg'>Bill</h3>
                    <p className='text-sm font-light text-gray-600'>online</p>
                </div>
               <div className='cursor-pointer'>
                <svg xnlns="http://www.w3.org/2000/svg" className='icon icon-tabler icon-tabler-phone-outgoing' width='24' height='24' viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l3 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2  2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <line x1="15" y1="9" x2="20"  y2="4" />
                <polyline points="16 4 20 4 20 8" />
                </svg>
            </div>
        </div>
    <div className='h-[75%] w-full overflow-auto shadow-sm'>
        <div className='p-14'>
           {
            messages.length > 0 ?
            messages.map(({ message, user : { id } = {} }) => {
                if(id === user?.id) {
                    return(
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        {message}
                      </div>
                    )
                } else {
                    return(
                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        {message}
                        </div>
                )
            }  
        }) : <div className='text-center text-lg font-semibold mt-24'>No Messages</div>
           }
        </div>
    </div>
        <div className='p-14 w-full flex items-center'>
       <Input placeholder='Type a message...' className='w-[75%]' inputClassName='p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none' />
        <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
           <path d="M10 14l11 -11" />
           <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
           </svg>
        </div>
        <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
          </svg>
        </div>
        </div>
   
    </div>
        <div className='w-[25%] h-screen bg-light'>

        </div>
    </div>
  )
}

export default Dashboard