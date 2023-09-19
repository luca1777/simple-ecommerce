import React, { useEffect } from 'react'
import { CategoryPants } from './category-pants'
import Newsletter from '../newsletter'
import { Footer } from '../footer'

export const Pants = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <CategoryPants />
    <Newsletter />
    <Footer />
    </>
  )
}
