import React from 'react'


const Table = () => {
    return (
      <div>
        <table>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>CLASS</th>
                  <th>SCORE</th>
                  <th>INDEX</th>
              </tr>
          </thead>
          <tbody>
          {global.values && (
    <tr>
      <td>{global.values._id}</td>
      <td>{global.values._source.description}</td>
      <td>{global.values._source._class}</td>
      <td>{global.values._score}</td>
      <td>{global.values._index}</td>
    </tr>
  )}
          </tbody>
      </table>
          </div>
    )
  }
  export default Table
  
