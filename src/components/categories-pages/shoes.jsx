import React, { useEffect } from 'react'
import { CategoryShoes } from './category-shoes'
import Newsletter from '../newsletter'
import { Footer } from '../footer'

export const Shoes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <CategoryShoes />
    <Newsletter />
    <Footer />
    </>
  )
}
