import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import _ from 'lodash'
import './Pagination.css'
import TableRow from './TableRow'

class PaginationTable extends Component {
  static propTypes = {
    allData: PropTypes.object
  }

  handleDelete = (id) => {
    const oldData = this.props.allData
    const remainData = _.omit(oldData, id)
    localStorage.setItem('formData', JSON.stringify(remainData))
    this.props.deleteData(id)
  }

  handleEdit = (id) => {
    const editData = this.props.allData[id]
    console.log('editData', editData)
    this.props.form.setValues(editData)
  }

  render() {
    console.log('pagination props', this.props)
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
              {_.map(this.props.allData, (data, key) => {
                return (<TableRow data={data} handleEdit={() => this.handleEdit(key)} handleDelete={() => this.handleDelete(key)}/>)
              })}  
            </tbody>
          </Table>
        </div>      
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteData: id => dispatch({type: 'DELETE_DATA', id})
})

export default connect(null, mapDispatchToProps)(PaginationTable)

