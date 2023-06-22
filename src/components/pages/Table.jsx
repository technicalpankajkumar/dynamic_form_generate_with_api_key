import React, { memo } from 'react'
import ProTable from './ProTable'

function Table({ data }) {

    let allKeys = data.length != 0 && Object.keys(data[Object.keys(data)[0]][0])

    console.log(allKeys)
    console.log(data)
    return (
        <table border="1px" >
            <thead>
                <tr>
                    {
                        data.length != 0 && allKeys.map((key, index) => {
                            return <th key={index}>{key}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.length != 0 && data[Object.keys(data)[0]].map((item, index) => {
                        return (
                            <tr >
                                {
                                    allKeys.map(key => {
                                        return (typeof item[key] == 'object') //nested table
                                            ?
                                            // <td>
                                            //  <table border="1px" >
                                            //  <thead>
                                            //      <tr>
                                            //          {
                                            //              Object.keys(item[key]).map(nestedKey => {
                                            //                  return <th>{nestedKey}</th>
                                            //              })
                                            //          }
                                            //      </tr> 
                                            //  </thead>
                                            //  <tbody>
                                            //      {
                                            //          Object.keys(item[key]).map(nestedKey => {
                                            //              return (typeof item[key][nestedKey] == 'object')

                                            //                  ?
                                            //                  <table border="1px" >
                                            //                      <thead>
                                            //                          {
                                            //                              <tr>
                                            //                                  {
                                            //                                      Object.keys(item[key][nestedKey]).map(nestedKey2 => {
                                            //                                          return <th>{nestedKey2}</th>
                                            //                                      })
                                            //                                  }
                                            //                              </tr>
                                            //                          }
                                            //                      </thead>
                                            //                      <tbody>
                                            //                          {
                                            //                              Object.keys(item[key][nestedKey]).map(nestedKey2 => {
                                            //                                  console.log(item[key][nestedKey])

                                            //                                  return typeof item[key][nestedKey][nestedKey2] == 'object'
                                            //                                      ? <table border="1px">
                                            //                                          <thead>
                                            //                                              {
                                            //                                                  <tr>
                                            //                                                      {
                                            //                                                          Object.keys(item[key][nestedKey][nestedKey2]).map(nestedKey3 => {
                                            //                                                              return <td>{nestedKey3}</td>
                                            //                                                          })
                                            //                                                      }
                                            //                                                  </tr>
                                            //                                              }
                                            //                                          </thead>
                                            //                                          <tbody>
                                            //                                              {
                                            //                                                  Object.keys(item[key][nestedKey][nestedKey2]).map(nestedKey3 => {
                                            //                                                      return <td>{item[key][nestedKey][nestedKey2][nestedKey3]}</td>

                                            //                                                  })

                                            //                                              }
                                            //                                          </tbody>
                                            //                                      </table>
                                            //                                      :
                                            //                                      <td>{item[key][nestedKey][nestedKey2]}</td>

                                            //                              })
                                            //                          }
                                            //                      </tbody>
                                            //                  </table>
                                            //                  :
                                            //                  <td>{item[key][nestedKey]}</td>
                                            //          })
                                            //      }
                                            //  </tbody>
                                            //  </table>
                                            //  </td>
                                            <td><ProTable item={item[key]}/></td>
                                            // <td></td>
                                            :
                                            <td>{item[key]}</td>

                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default memo(Table)