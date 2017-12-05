import { connect } from 'react-redux'
import Counter from './Counter'

const mapStateToProps = (state) => ({ count: state.count })

export default connect(mapStateToProps)(Counter)