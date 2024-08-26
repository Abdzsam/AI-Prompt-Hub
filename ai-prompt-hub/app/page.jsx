import React from 'react'
import Feed from '../components/Feed'

const Home = () => {
  return (
    <section className='w-full flex flex-col items-center'>
        <h1 className='head_text text-center'>Discover & Share</h1>
        <span className='orange_gradient head_text text-center'>AI-Powered Prompts</span>
        <p className='desc text-center'>
            PromptHub is an open-source AI prompting tool for modern world to discover, creat and share creative prompts
        </p>
        <Feed/>
    </section>
  )
}

export default Home
