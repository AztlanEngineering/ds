import * as React from 'react'

export default {
  title:'Grid',
}

const columns = [
  {
    width:1,
    back :'brown'
  },
  {
    width:2,
    back :'pink'
  },
  {
    width:3,
    back :'violet'
  },
  {
    width:4,
    back :'olive'
  },
  {
    width:5,
    back :'purple'
  },
  {
    width:6,
    back :'teal'
  },
  {
    width:7,
    back :'blue'
  },
  {
    width:8,
    back :'light-grey'
  },
  {
    width:9,
    back :'yellow'
  },
  {
    width:10,
    back :'orange'
  },
  {
    width:11,
    back :'green'
  },
  {
    width:12,
    back :'red'
  },
]

export const Default = () =>
  <div className='g'>
    {columns.map((e) =>
      <div
        className={ 'g' + e.width + ' bx x-' + e.back }
        style={{ height: '200px' }}
      >
        { 'Column '+ e.width + ' wide' }
      </div>
    )}
  </div>

export const SM = () =>
  <div className='w'>
    {columns.map((e) =>
      <div
        className={ 'g' + e.width + '-sm bx x-' + e.back }
        style={{ height: '200px' }}
      >
        { 'Column '+ e.width + ' wide' }
      </div>
    )}
  </div>

export const MD = () =>
  <div className='w'>
    {columns.map((e) =>
      <div
        className={ 'g' + e.width + '-md bx x-' + e.back }
        style={{ height: '200px' }}
      >
        { 'Column '+ e.width + ' wide' }
      </div>
    )}
  </div>

export const LG = () =>
  <div className='w'>
    {columns.map((e) =>
      <div
        className={ 'g' + e.width + '-lg bx x-' + e.back }
        style={{ height: '200px' }}
      >
        { 'Column '+ e.width + ' wide' }
      </div>
    )}
  </div>

export const ColumnGaps = () =>
  ['02', '05', '1', '2'].map((f) =>
    <div className={'g i' + f}>
      {columns.map((e) =>
        <div
          className={ 'g1 bx x-' + e.back }
          style={{ height: '200px' }}
        >
          { 'Col '+ e.width + ' wide' }
        </div>
      )}
    </div>
  )

