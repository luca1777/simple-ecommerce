import React, { useEffect } from 'react'
import { CategoryHoodies } from './category-hoodies'
import Newsletter from '../newsletter'
import { Footer } from '../footer'

export const Hoodies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <CategoryHoodies />
      <Newsletter />
      <Footer />
    </>
  );
}
