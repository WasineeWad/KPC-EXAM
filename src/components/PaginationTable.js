import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import { Table } from 'react-bootstrap'
import _ from 'lodash'
import './Pagination.css'
import TableRow from './TableRow'

export default class PaginationTable extends Component {
  static propTypes = {
    allData: PropTypes.object
  }

  render() {
    return (
      <div className='pagination-table-container'>
        <ReactPaginate
          previousLabel={'← PREV'}
          nextLabel={'NEXT →'}
          previousClassName={'button'}
          nextClassName={'button'}
          breakLabel={'...'}
          breakClassName={'breaker-section'}
          breakLinkClassName={'breaker-text'}
          pageClassName={'page-number-section'}
          pageLinkClassName={'link'}
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={() => console.log('page changed')}
          containerClassName={'pagination-contianer'}
          activeClassName={'active-page'}
        />
        <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Gender</th>
                <th>Mobile phone</th>
                <th>Nationality</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {_.map(this.props.allData, (data) => {
                return (<TableRow data={data} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>)
              })}  
            </tbody>
          </Table>
        </div>      
      </div>
    )
  }
}

