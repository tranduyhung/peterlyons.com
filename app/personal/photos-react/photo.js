const React = require('react')
const RD = require('react-dom')

function links (props) {
  'use strict'
  var links = []
  if (props.previousPhoto) {
    let attrs = {
      href: props.previousPhoto.pageURI,
      onClick: (event) => {
        event.preventDefault()
        props.viewPhoto(props.previousPhoto.name)
      },
      key: 'previous'
    }
    links.push(RD.a(attrs, '&larr;prevous&nbsp;'))
  }

  if (props.nextPhoto) {
    let attrs = {
      href: props.nextPhoto.pageURI,
      onClick: (event) => {
        event.preventDefault()
        props.viewPhoto(props.nextPhoto.name)
      },
      key: 'next'
    }
    links.push(RD.a(attrs, 'next&rarr;'))
  }
  return links
}

function Photo (props) {
  const photo = props.photo
  // return (
  //   <div className="photo">
  //     <div id='nextPrev'>
  //       {links(props)}
  //     </div>
  //     <figure>
  //       <img src={photo.fullSizeURI} alt={photo.caption} title={photo.caption}>
  //       </img>
  //       <figcaption>{photo.caption}</figcaption>
  //     </figure>
  //   </div>
  //   )
  return RD.div({className: 'photo'},
    RD.div({id: 'nextPrev'}, links(props)),
    RD.figure(null,
      RD.img({
        src: photo.fullSizeURI,
        alt: photo.caption,
        title: photo.caption
      }),
      RD.figcaption(null, photo.caption)
    )
  )
}

module.exports = Photo