import Layout from "@/components/Layout";
import {API_URL} from "@/config/index"
import Link from "next/link";
import EventItem from "@/components/EventItem";


export default function Home({events}) {

  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events for now...</h3>}


      {events.map(evt => (
        <EventItem key={evt.id} evt={evt}/>
      ))}

      {events.length > 0 && (
        <Link href="/events" >
          <a className="btn-secondary">View All Events</a>
        </Link>
      ) }
    </Layout>
  );
}


export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=5`)
  const evts = await res.json()

    let { events } = evts;
    events = events.slice(0, 3);

 return {
   props: { events },
   revalidate: 1,
 };
}