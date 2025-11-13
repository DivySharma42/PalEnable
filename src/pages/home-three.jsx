import BlogThree from '@/components/sections/blogs/blogThree'
import Brand from '@/components/sections/brands/brand'
import HeroThree from '@/components/sections/heros/heroThree'

import TextAnimationBig from '@/components/sections/textAnimations/textAnimationBig'
import React from 'react'

const HomeThree = () => {
  return (
    <>
      <HeroThree />
      <Brand className={"pt-100"}/>
 
      <TextAnimationBig/>
      <BlogThree/>
    </>
  )
}

export default HomeThree