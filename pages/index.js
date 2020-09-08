import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>…</Head>
      <section>…</section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
