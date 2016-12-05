import React from 'react'

export const NewsComponent = (props) => {

    const { news, style } = props

    return (
      <div className={style}>
        <p>{news.name}</p>
        <p>{news.description}</p>
      </div>
    )
}
