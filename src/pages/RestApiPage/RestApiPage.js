import React from 'react'
import './RestApiPage.css'
import { connect } from 'react-redux'
import restApiSrevice from '../../service/restApi'
import TableRow from '../../components/TableRow/TableRow'
import Table from 'react-bootstrap/Table'



class RestApiPage extends React.Component {
    state = { tHeaders: [] }
    async componentDidMount() {
        let data = await restApiSrevice.getData()
        data = data.splice(0, 10)
        this.props.setTableData(data)
        let header = await Object.keys(this.props.tableData[0])
        this.setState({ tHeaders: header })
    }
    render() {
        return (
        <div>
            {/* <Table striped bordered hover variant="dark"> */}
                <table className="table-container">

    <tr>
                    {this.props.tableData && this.state.tHeaders.map((key, index) => {
                        return <th key={index}>{key.toUpperCase()}</th>
                    })}
                    </tr>
                
                    {this.props.tableData && this.props.tableData.map((movie) => {
                        return < TableRow key={movie.id} title={movie.title} userId={movie.userId} id={movie.id}  ></TableRow>
                    })
                    }
                </table>
            {/* </Table> */}
        </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        tableData: state.tableData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setTableData: (data) => {
            dispatch({ type: 'SET_TABLE_DATA', data: data })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestApiPage)