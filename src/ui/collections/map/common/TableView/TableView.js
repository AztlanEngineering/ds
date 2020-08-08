/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'ui/elements'

import { useObjectMap } from '../Context'

import { useTable, useSortBy } from 'react-table'

import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/client'
//Intl
import { Actions } from '../Actions'
import { Row } from './common'

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './table_view.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./table_view.scss')
}

const baseClassName = 'table_view'


/**
 * Use `TableView` to
 * Has color `x`
 */
const TableView = ({
  id,
  className,
  style,
}) => {

  const {
    currentType
  } = useObjectMap()

  const {
    loading,
    error,
    data={},
    refetch
  } = useQuery(gql(currentType.graphql.queries.ALL),
    {
      skip                       :!currentType.name,
      notifyOnNetworkStatusChange:true
    })

  const columns = useMemo(() => currentType.defaultViews.table.columns, [currentType.name])
  const finalData = useMemo(() => (data && data[Object.keys(data).reduce((a, e) => {
    return e
  }, '')]) || [],
  [currentType.name, loading])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data:finalData
    },
    useSortBy
  )

  const firstPageRows = rows

  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,

          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { error && JSON.stringify(error) }
      <Button.Group
        style={{
          justifyContent:'end'
        }}
        independent
      >
        <Button
          onClick={ !loading ? () => refetch() : undefined }
          className='x-green'
          loading={ loading }
        >
          Refetch (r)
        </Button>
      </Button.Group>

      <div>
        <ul className='yf'>
          <li><strong>Visible :</strong></li>
        </ul>
        <ul className='yf'>
          <li><strong>Hidden :</strong></li>
        </ul>
      </div>
      { data &&
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((e, i) => (
              <tr
                {...e.getHeaderGroupProps()}
                key={i}
              >
                {e.headers.map((f, j) => (
                /* Add the sorting props to control sorting. For this example
                   we can add them into the header props */
                  <th
                    {...f.getHeaderProps(f.getSortByToggleProps())}
                    key={j}
                  >
                    {f.render('Header')}
                    {/* Add a sort direction indicator */}
                    <span>
                      {f.isSorted
                        ? f.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
                <th className='actions'>
                  Actions
                </th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map(
              (e, i) => {
                prepareRow(e)
                return (
                  <tr
                    {...e.getRowProps()}
                    key={i}
                  >
                    {e.cells.map(cell => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                    <td className='actions'>
                      <Actions
                        className='s-2 k-s'
                        style={{ justifyContent: 'end' }}
                        item={ e.values }
                        refetch={ refetch }
                        /*
                        extraActions={[
                          condition:(user) => true,
                          Component:DisplayJson
                         ]}*/
                      />
                    </td>
                  </tr>
                )}
            )}

          </tbody>
        </table>
      }
    </div>
  )}

TableView.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,
  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

/*
TableView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default TableView
