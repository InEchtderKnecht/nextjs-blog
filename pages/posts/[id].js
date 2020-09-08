import Layout from '../../components/layout'
import Date from '../../components/date'

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  console.log('postData', postData)
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}