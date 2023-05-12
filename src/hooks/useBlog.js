import React, { useState } from 'react'

export const useBlog = () => {
  const [blogData] = useState([
    {
      id: 'portal',
      title: <h2>How to Create a NFT Marketplace</h2>,
      content: (
        <p>
          As the world of blockchain technology and cryptocurrencies continue to
          evolve, so too does the need for new and innovative applications. One
          such application is the NFT marketplace, which allows users to buy,
          sell, and trade non-fungible tokens (NFTs).
        </p>
      ),
      images: [
        {
          alt: 'NFT-Image',
          src: '/images/blog/NFT.png',
          compressedSrc: '/images/blog/compressed/NFT.png',
        },
      ],
      links: [
        <a
          key="portal-link-1"
          href="https://web3wizards.tech/blog/coding-bootcamp/how-to-create-a-nft-marketplace"
          target="_blank"
          rel="noreferrer"
        >
          How to Create a NFT Marketplace
        </a>,
        <a
          key="portal-link-2"
          href="https://web3wizards.tech/blog/coding-bootcamp/which-programing-language-should-you-learn"
          target="_blank"
          rel="noreferrer"
        >
          Which Programming Language Should You Learn
        </a>,
      ],
    },
    {
      id: 'spartan',
      title: <h2>Why I almost quit coding for good</h2>,
      content: (
        <p>
          I absolutely love what I do now. My work feels fulfilling and
          meaningful because I help others with the skills I taught myself – the
          exact opposite of my last 9-to-5 job.
        </p>
      ),
      images: [
        {
          alt: 'spartan-img-1',
          src: '/images/blog/quit.png',
          compressedSrc: '/images/blog/compressed/quit.png',
        },
      ],
      links: [
        <a
          key="spartan-link-1"
          href="https://web3wizards.tech/blog/coding-bootcamp/why-i-almost-quit-coding-for-good"
          target="_blank"
          rel="noreferrer"
        >
          Why I almost quit coding for good
        </a>,
      ],
    },
    {
      id: 'insig',
      title: <h2>Ready to learn to code?</h2>,
      content: (
        <p>
          ...learning to code can change your life for the better. Thats what it
          did to me and Im here to share everything I learned along the way with
          you. My coding journey started back in 2020.
        </p>
      ),
      images: [
        {
          alt: 'ready-img-1',
          src: '/images/blog/ready.png',
          compressedSrc: '/images/blog/compressed/ready.png',
        },
      ],
      links: [
        <a
          key="insig-link-1"
          href="https://web3wizards.tech/blog/coding-bootcamp/ready-to-earn-to-code"
          target="_blank"
          rel="noreferrer"
        >
          Ready to learn to code?
        </a>,
      ],
    },
    
   
    
    
  ])

  return { blogData }
}

export default useBlog
























