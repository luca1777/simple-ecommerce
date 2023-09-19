import React, { useEffect } from 'react'
import { CategoryTshirts } from './category-tshirts'
import Newsletter from '../newsletter'
import { Footer } from '../footer'

export const Tshirts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <CategoryTshirts />
    <Newsletter />
    <Footer />
    </>
  )
}
