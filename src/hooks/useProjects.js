import React, { useState } from 'react'

export const useProjects = () => {
  const [projectData] = useState([
    {
      id: 'portal',
      title: <h2>My First Website</h2>,
      content: (
        <p>
          Back in 2020 I created my first Non Fungible token NFT. I taught
          myself HTML Basics and enough JavaScript to develop an NFT. I used NPM
          and us Node.js and an NFT minting site. As the NFT and Crypto Markets
          slowed down, I decided to make good use of my time. Tough Teddez is a
          NFT (nonfungible Token) The aim is to investigate methods for creating
          community and utility around a NFT.
        </p>
      ),
      images: [
        {
          alt: 'portal-img-1',
          src: '/images/projects/portal-1.png',
          compressedSrc: '/images/projects/compressed/portal-1.png',
        },
        {
          alt: 'portal-img-2',
          src: '/images/projects/portal-2.png',
          compressedSrc: '/images/projects/compressed/portal-2.png',
        },

        {
          alt: 'portal-img-3',
          src: '/images/projects/portal-3.png',
          compressedSrc: '/images/projects/compressed/portal-3.png',
        },
      ],
      links: [
        <a
          key="portal-link-1"
          href="https://toughteddez.com/index.html"
          target="_blank"
          rel="noreferrer"
        >
          Tough Teddez NFT
        </a>,
      ],
    },
    {
      id: 'spartan',
      title: <h2>Code Bootcamp Project 1</h2>,
      content: (
        <p>
          After teaching myself to code with YouTube videos I felt I needed to
          know more about Computer Science so I enrolled in a Full Stack
          Bootcamp at a local University. Here is one of the projects I created
          with a group of other students.
        </p>
      ),
      images: [
        {
          alt: 'spartan-img-1',
          src: '/images/projects/spartan-1.jpg',
          compressedSrc: '/images/projects/compressed/spartan-1.jpg',
        },
        {
          alt: 'spartan-img-2',
          src: '/images/projects/spartan-2.jpg',
          compressedSrc: '/images/projects/compressed/spartan-2.jpg',
        },
        {
          alt: 'spartan-img-3',
          src: '/images/projects/spartan-3.jpg',
          compressedSrc: '/images/projects/compressed/spartan-3.jpg',
        },
      ],
      links: [
        <a
          key="spartan-link-1"
          href="https://madams1972.github.io/CampAholics/"
          target="_blank"
          rel="noreferrer"
        >
          CampAholics
        </a>,
      ],
    },
    {
      id: 'insig',
      title: <h2>Weather Dashboard</h2>,
      content: (
        <p>
          This website allows the user to enter a city name and returns the
          current weather conditions in that city, along with a five day weather
          forecasts. When the user enters the city name, it automatically drops
          into the favorites list (using local storage). Users can click again
          on the city name in the favorites list, it will once again display the
          weather data relevant to that city.
        </p>
      ),
      images: [
        {
          alt: 'insig-img-1',
          src: '/images/projects/uilib-1.png',
          compressedSrc: '/images/projects/compressed/uilib-1.png',
        },
        {
          alt: 'insig-img-2',
          src: '/images/projects/uilib-2.png',
          compressedSrc: '/images/projects/compressed/uilib-2.png',
        },
        {
          alt: 'insig-img-3',
          src: '/images/projects/uilib-3.png',
          compressedSrc: '/images/projects/compressed/uilib-3.png',
        },
      ],
      links: [
        <a
          key="insig-link-1"
          href="https://madams1972.github.io/Weather-API/"
          target="_blank"
          rel="noreferrer"
        >
          Weather Dashboard
        </a>,
      ],
    },
    {
      id: 'Stanton Adams Consulting  LLC',
      title: <h2>Stanton Adams Consulting LLC</h2>,
      content: (
        <p>
          As a small business owner and entrepreneur I learned to be
          resourcefull so I had to create a website that helped attract
          customers and where folks could sign up.
        </p>
      ),
      images: [
        {
          alt: 'hope-and-gorey-img-1',
          src: '/images/games/hope-and-gorey-1.png',
          compressedSrc: '/images/games/compressed/hope-and-gorey-1.png',
        },
        {
          alt: 'hope-and-gorey-img-2',
          src: '/images/games/hope-and-gorey-2.png',
          compressedSrc: '/images/games/compressed/hope-and-gorey-2.png',
        },
        {
          alt: 'hope-and-gorey-img-3',
          src: '/images/games/hope-and-gorey-3.png',
          compressedSrc: '/images/games/compressed/hope-and-gorey-3.png',
        },
      ],
      links: [
        <a
          key="hope-and-gorey-link-1"
          href="https://www.youtube.com/watch?v=lds2Vw24TRk"
          target="_blank"
          rel="noreferrer"
        >
          Stanton Adams Consulting LLC
        </a>,
        <a
          key="hope-and-gorey-link-2"
          href="https://www.stantonadams.com"
          target="_blank"
          rel="noreferrer"
        >
          Stanton Adams Consulting LLC
        </a>,
      ],
    },
    
  ])

  return { projectData }
}

export default useProjects









