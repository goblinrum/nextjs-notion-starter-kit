import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

import twr from '../public/twr.gif'

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || 'Page Not Found'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main>
          <h1 className="font-bold mx-auto text-3xl text-center md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            451 – Something is burning and that's not good
          </h1>
          <p className="text-gray-600 mx-auto dark:text-gray-400 mb-8">
            Enjoy a peaceful gif while you figure out where you were supposed to end up...
          </p>

          <img
            src='/twr.gif'
            alt='The Wind Rises'
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  )
}
