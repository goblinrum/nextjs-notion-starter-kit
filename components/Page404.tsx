import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'


export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || 'Page Not Found'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main>
          <h1 className={styles.heading}>
            451 – Something is burning and that is not good
          </h1>
          <p>
            Enjoy a peaceful gif while you figure out where you were supposed to end up...
          </p>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Make sure that Notion page &quot;{pageId}&quot; is publicly
                accessible.
              </p>
            )
          )}

          <img
            src='/twr.gif'
            alt='The Wind Rises'
            className={styles.errorImage}
          />

          <p className="text-gray-600 mx-auto dark:text-gray-400 mb-8">
            <a href="/">Click here to go back to the homepage</a>
          </p>
        </main>
      </div>
    </>
  )
}
