import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import ImgModal from '../components/ImgModal'
import Page from '../components/Page'
import ProgressiveImg from '../components/ProgressiveImg'
import ResponsiveCarousel from '../components/ResponsiveCarousel'
import { useBlog } from '../hooks/useBlog'

const Blog = ({ setPage }) => {
  const { blogData } = useBlog()
  const imgModal = useRef()
  const [imgModalSrc, setImgModalSrc] = useState(null)
  const [isImgModalOpen, setIsImgModalOpen] = useState(false)


const openImgModal = (imgModalSrc) => {
  setImgModalSrc(imgModalSrc)
  setIsImgModalOpen(true)
}

const closeImgModal = () => {
  setImgModalSrc(null)
  setIsImgModalOpen(false)
}
  return (
    <Page
      setPage={setPage}
      name="Blog"
      content={
        <div className="blog-page">
          <div className="blog-page__blurb">
            <img className="avatar" src="/images/malissa-avatar2.png" />
            <div>
              <h1>Malissa Adams //FridayKnight13 // フライデーナイト 13</h1>
              <p>
                I have been writing a blog for a few years now{' '}
                <a
                  href="https://web3wizards.tech/blog/coding-bootcamp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web 3.0 Wizardz                </a>
                . I have also created a NFT called {' '}
                <a
                  href="https://www.toughteddez.com/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tough Teddez NFT
                </a>{' '}
                and see myself pursuing this more in the future.
              </p>
            </div>
          </div>
          <ImgModal
            innerRef={imgModal}
            src={imgModalSrc}
            isImgModalOpen={isImgModalOpen}
            closeImgModal={closeImgModal}
          ></ImgModal>
          <ResponsiveCarousel
            content={blogData.map((item, index) => {
              return (
                <div
                  key={`blog-${index}`}
                  className="blog-page__blog--container"
                >
                  <div className="blog-page__blog--title">{item.title}</div>
                  <div className="blog-page__blog--images">
                    {item.images.map((image, index) => {
                      return (
                        <ProgressiveImg
                          onClick={() => openImgModal(image.src)}
                          key={`${item.id}-modal-button-${index}`}
                          style={{ cursor: 'pointer' }}
                          alt={image.alt}
                          src={image.src}
                          compressedSrc={image.compressedSrc}
                        />
                      )
                    })}
                  </div>
                  <div className="blog-page__blog--content">{item.content}</div>
                  <div className="blog-page__blog--links">
                    {item.links.map((item, index) => {
                      return (
                        <div key={`link-${index}`}>
                          <FaExternalLinkSquareAlt
                            style={{ marginRight: '4px' }}
                          />
                          {item}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          />
        </div>
      }
    ></Page>
  )
}

Blog.displayName = 'Blog'

Blog.propTypes = {
  setPage: PropTypes.func,
}







export default Blog