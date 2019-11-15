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

  constructor(props) {
    super(props)
    this.state = {
      offset: 0
    }
  }

  handleDelete = (id) => {
    const oldData = this.props.allData
    const remainData = _.omit(oldData, id)
    localStorage.setItem('formData', JSON.stringify(remainData))
    this.props.deleteData(id)
  }

  handleEdit = (id) => {
    const editData = this.props.allData[id]
    this.props.form.setValues(editData)
  }

  handlePageClick = data => {
    let selectedPage = data.selected
    this.setState({offset: selectedPage * 5})
  }

  render() {
    const { allData } = this.props
    const splicedData = Object.keys(allData).slice(this.state.offset, this.state.offset + 5).reduce((result, key) => {
      result[key] = allData[key]
      return result
    }, {})
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
          pageCount={Math.ceil(Object.keys(allData).length / 5)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
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
              {_.map(splicedData, (data, key) => {
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

