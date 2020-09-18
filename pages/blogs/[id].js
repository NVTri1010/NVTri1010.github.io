import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import content from 'content'
import { BlogLayout } from 'components'
import { formatDate } from 'helpers/format'

import styles from './BlogDetail.module.css'

const formatData = raw => {
  const parsed = JSON.parse(raw)

  return { ...parsed, createdDate: new Date(parsed.createdDate) }
}

const BlogDetail = ({ data: rawData }) => {
  const data = formatData(rawData)
  const [content, setContent] = useState()
  const { title, createdDate } = data

  const getContent = async () => {
    const res = await import(`content/${data.id}.mdx`)
    setContent(res)
  }
  const Component = content?.default

  useEffect(() => {
    getContent()
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <BlogLayout>
        <div className={styles.container}>
          <h2>{title}</h2>
          <div className={styles.date}>{formatDate(createdDate)}</div>
        </div>
        {!!content && <Component />}
      </BlogLayout>
    </>
  )
}

export default BlogDetail

export async function getStaticPaths() {
  return {
    paths: content.map(o => ({
      params: { id: o.id + '' }
    })),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const data = content.find(o => o.id.toString() === id)

  return {
    props: {
      data: JSON.stringify(data)
    }
  }
}
