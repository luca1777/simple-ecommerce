import React from 'react'
import { CategoriesSection } from '../../components/categories-section';
import "./categories.css";
import { Outlet } from 'react-router-dom';

export const Categories = () => {
  return (
    <>
    <CategoriesSection />
    <Outlet />
    </>
  )
}
