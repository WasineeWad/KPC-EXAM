import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonToolbar } from 'react-bootstrap'

export class TableRow extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      checked: false
    };
  }

  handleChangeData = () => {
    this.setState({checked: !this.state.checked})
  }

  render() {
    const { data } = this.props
    return (
      <tr>
        <td align='center'>
          <input type='checkbox' onChange={this.handleChangeData} />
        </td>
        <td>{`${data.firstName} ${data.lastName}`}</td>
        <td>{data.gender}</td>
        <td>{data.mobilePhone.join('')}</td>
        <td>{data.nationality}</td>
        <td align='center'>
          <Button variant="link" size="sm" disabled={!this.state.checked} onClick={this.props.handleEdit}>Edit</Button>
          <span>/</span>
          <Button variant="link" size="sm" disabled={!this.state.checked} onClick={this.props.handleDelete}>Delete</Button>
        </td>
      </tr>
    )
  }
}

export default TableRow
