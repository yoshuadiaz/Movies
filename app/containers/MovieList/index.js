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
import MovieListItem from "components/MovieListItem/Loadable"
import styled from "styled-components"

const MovieListStyled = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 48% 48%;
  }

  @media only screen and (max-width: 870px) {
    grid-template-columns: 100%;
  }
`

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
      <MovieListStyled>
        {isLoading && <h2>Loading...</h2>}
        {hasError && (
          <div>
            <h2>Error</h2>
            <p>Ocurrio un error</p>
          </div>
        )}
        {items.length > 0 &&
          items.map(item => <MovieListItem key={item.name} data={item} />)}
      </MovieListStyled>
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
