import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import _ from 'lodash'
import './Pagination.css'
import TableRow from './TableRow'

class PaginationTable extends Component {
  static propTypes = {
    allData: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      offset: 0,
      isCheckedAll: false
    }
  }

  handleDelete = (id) => {
    const oldData = this.props.allData
    const remainData = _.omit(oldData, id)
    localStorage.setItem('formData', JSON.stringify(remainData))
    this.props.deleteData(id)
  }

  handleEdit = (id) => {
    const editData = {
      ...this.props.allData[id],
      birthday: new Date(this.props.allData[id].birthday),
      id
    }
    this.props.form.setValues(editData)
  }

  handlePageClick = data => {
    let selectedPage = data.selected
    this.setState({offset: selectedPage * 5})
  }

  handleSelectAllCheckbox = (value) => {
    this.setState({isCheckedAll: value})
  }

  handleDeleteAll = () => {
    localStorage.removeItem('formData')
    this.props.deleteAllData()
  }

  render() {
    const { allData } = this.props
    const splicedData = Object.keys(allData).slice(this.state.offset, this.state.offset + 5).reduce((result, key) => {
      result[key] = allData[key]
      return result
    }, {})
    return (
      <div className='pagination-table-container'>
        <div className='top-section'>
          <div className='select-all-section'>
            <input type='checkbox' onChange={() => this.handleSelectAllCheckbox(!this.state.isCheckedAll)} checked={this.state.isCheckedAll}/>
            <div className='space5' />
            <span className='text-black'>Select all</span>
            <div className='space5' />
            <Button variant="danger" size="sm" disabled={!this.state.isCheckedAll} onClick={this.handleDeleteAll}>Delete All</Button>
          </div>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            previousClassName={'prev-button'}
            nextClassName={'next-button'}
            breakLabel={'...'}
            breakClassName={'breaker-section'}
            breakLinkClassName={'breaker-text'}
            pageClassName={'page-number-section'}
            pageLinkClassName={'link'}
            pageCount={Math.ceil(Object.keys(allData).length / 5)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination-contianer'}
            activeClassName={'active-page'}
          />
        </div>
        <div>
          <Table className='table' striped bordered hover size="sm">
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
              {_.map(splicedData, (data, key) => {
                return (
                  <TableRow
                    data={data}
                    isCheckedAll={this.state.isCheckedAll}
                    handleEdit={() => this.handleEdit(key)}
                    handleDelete={() => this.handleDelete(key)}
                    handleSelectAllCheckbox={(value) => this.handleSelectAllCheckbox(value)}
                  />
                )
              })}  
            </tbody>
          </Table>
        </div>      
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteData: id => dispatch({type: 'DELETE_DATA', id}),
  deleteAllData: () => dispatch({type: 'DELETE_ALL_DATA'})
})

export default connect(null, mapDispatchToProps)(PaginationTable)

