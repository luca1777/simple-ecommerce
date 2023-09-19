import React, { useEffect } from 'react'
import { CategoryAll } from './category-all'
import Newsletter from '../newsletter'
import { Footer } from '../footer'

export const All = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <CategoryAll />
    <Newsletter />
    <Footer />
    </>
  )
};
