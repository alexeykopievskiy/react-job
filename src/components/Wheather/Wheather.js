import React from 'react'

export const WheatherComponent = (props) => {


    console.log(props, 'list aaa');

    const { wheather } = props

    console.log(wheather, '$$$$$$$$$$$$');



    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>date</th>
              <th>weather type</th>
              <th>wind speed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{wheather.dt_txt}</td>
              <td>{wheather.weather[0].description}</td>
              <td>{wheather.wind.speed}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
