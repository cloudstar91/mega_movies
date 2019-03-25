import React from "react";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MovieDescription: ""
    };
  }

  componentDidMount() {
    this.getMovieDetail();
  }

  getMovieDetail = async () => {
    const { params } = await this.props.match;
    const id = params.id;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=daf966ec004a4c2e755a29fc1605e0cb&language=en-US`;

    let response = await fetch(URL);
    let data = await response.json();

    this.setState({ MovieDescription: data.overview });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>{this.state.MovieDescription} </h1>
      </div>
    );
  }
}

export default MovieDetail;
