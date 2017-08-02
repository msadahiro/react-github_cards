import React, { Component } from 'react';
import Card from './components/Card'
import SearchBar from './components/SearchBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'msadahiro',
      realName: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      url: '',
      notFound: ''
    }
    this.fetchUser = this.fetchUser.bind(this);
  }
  fetchAPI(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          username: data.login,
          realName: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          url: data.html_url,
          notFound: data.message
        })
      })
      .catch((err) => console.log('error!'))
  }
  fetchUser(username) {
    let url = `https://api.github.com/users/${username}`
    this.fetchAPI(url)
  }
  componentDidMount() {
    let url = `https://api.github.com/users/${this.state.username}`
    this.fetchAPI(url)
  }
  render() {
    return (
      <div style={{ fontFamily: 'Lato', color: 'black', fontSize: '1.1rem' }}>
        <SearchBar fetchUser={this.fetchUser} />
        <Card data={this.state} />
      </div>
    );
  }
}


export default App;
