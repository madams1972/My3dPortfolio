import React, { useState } from 'react'

// const defaultItem = {
//   selected: false,
//   type: 'default',
// }

const videoItem = {
  selected: true,
  type: 'video',
}

export const useScreenItems = () => {
  const [items] = useState([
    // {
    //   ...defaultItem,
    //   id: 0,
    //   name: 'Web 3 Journal',
    //   details: (
    //     <p>
    //       The Web 3.0 Journal Podcast{' '}
    //       <a
    //         href="https://youtu.be/T1yWP5UkBA8"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         Pretty Hip
    //       </a>
    //       {'.'}.
    //     </p>
    //   ),
    // },
    {
      ...videoItem,
      id: 1,
      name: 'Web 3.0 Trailer',
      url: '/videos/WEB-3.0-Trailer.mp4',
      
      details: (
        <p>
          Web 3.0 Journal{' '}
          <a
            href="https://youtu.be/T1yWP5UkBA8"
            target="_blank"
            rel="noreferrer"
          >
            Web 3.0 Journal
          </a>{' '}
        </p>
      ),
    },
  ])

  return { items }
}

export default useScreenItems








