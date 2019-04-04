/**
 *
 * MovieList
 *
 */

import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { compose } from "redux"

import injectSaga from "utils/injectSaga"
import injectReducer from "utils/injectReducer"
import makeSelectMovieList from "./selectors"
import reducer from "./reducer"
import saga from "./saga"
import Actions from "./actions"

/* eslint-disable react/prefer-stateless-function */
export class MovieList extends React.Component {
  componentDidMount() {
    this.props.loadMovies()
  }
  render() {
    const {
      movieList: { isLoading, items, hasError }
    } = this.props
    return (
      <div>
        <pre>{JSON.stringify({ isLoading, items, hasError }, null, 2)}</pre>
      </div>
    )
  }
}

MovieList.propTypes = {
  loadMovies: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  movieList: makeSelectMovieList()
})

const mapDispatchToProps = dispatch => {
  return {
    loadMovies: () => dispatch(Actions.movielistLoadMovieItemsFetch())
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: "movieList", reducer })
const withSaga = injectSaga({ key: "movieList", saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MovieList)
