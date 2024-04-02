import Link from 'next/link';
import Feed from '@components/Feed';
import TicketFeed from '@components/TicketFeed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='blue_gradient head_text text-center'>
        ETEC Services 
            <br className='max-md:hidden' />
            <span className='head_text text-center'>Support</span>
        </h1>
        <p className='desc text-center'>
          ETEC provides access to our remote help desk software for enhanced customer support. 
          Our help desk allows the Customer to open a service ticket for any questions or issues 
          related to their Kamstrup solution at any time. Once a service ticket is created, our 
          entire support team is notified, and a team member will respond to answer questions or 
          provide assistance to resolve any issues related to Kamstrup’s software, infrastructure, 
          or devices.
        </p>
        <div className='sm:flex hidden'>
          <div className='flex gap-3 md:gap-5 p-5'>
            <Link href='/create-ticket' className='black_btn'>
              Create Ticket
            </Link>

            <Link href='/profile' className='black_btn'>
              View Tickets
            </Link>
          </div>
        </div>
        <TicketFeed />
        <Feed />        
    </section>
  )
}

export default Home