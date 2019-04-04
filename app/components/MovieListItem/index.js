/**
 *
 * MovieListItem
 *
 */

import React from "react"
// import PropTypes from 'prop-types';
import styled from "styled-components"

const MovieWrapper = styled.div`
  border-radius: 0.5em;
  border: 1px solid #ccc;
  display: grid;
  grid-template-columns: 130px auto;
  margin: 1em 0.5em;
`

const MoviePoster = styled.img`
  background-image: ${props => `url('${props.poster_url}')`};
  background-size: cover;
  background-position: center;
  height: 200px;
  width: 130px;
`

const MovieInfo = styled.div`
  padding: 0 1em 1em;
`

function MovieListItem(props) {
  return (
    <MovieWrapper>
      <MoviePoster poster_url={props.data.poster_url} />
      <MovieInfo>
        <h3>{props.data.name}</h3>
        <hr />
        <small>
          <strong>Año:</strong> {props.data.year} | <strong>Género:</strong>{" "}
          {props.data.genre} | <strong>Calificación</strong> {props.data.rating}{" "}
          / 5
        </small>
      </MovieInfo>
    </MovieWrapper>
  )
}

MovieListItem.propTypes = {}

export default MovieListItem
