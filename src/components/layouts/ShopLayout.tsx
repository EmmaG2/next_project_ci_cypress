import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar, SideMenu } from '../ui'

interface Props {
  children: string | JSX.Element | JSX.Element[]
  title: string
  pageDescription: string
  imageFullURL?: string
}

export const ShopLayout: FC<Props> = ({
  children,
  pageDescription,
  title,
  imageFullURL,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={pageDescription}
        />
        <meta
          name='og:title'
          content={title}
        />
        <meta
          name='og:description'
          content={pageDescription}
        />
        {imageFullURL ? (
          <meta
            name='og:image'
            content={imageFullURL}
          />
        ) : null}
      </Head>

      <Navbar />

      <SideMenu />

      <main
        style={{
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0 30px',
        }}
      >
        {children}
      </main>

      <footer>{/* TODO: footer */}</footer>
    </>
  )
}
