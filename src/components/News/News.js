import React from 'react'

export const NewsComponent = (props) => {

    const { news } = props

    console.log(news, 'newwwwoowow');
    return (
      <div>
        <p>{news.name}</p>
        <p>{news.description}</p>
      </div>
    )
}
