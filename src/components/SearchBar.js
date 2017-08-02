import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        let username = this.refs.search.value
        this.props.fetchUser(username)
        this.refs.search.value = ''
    }
    render() {
        return (
            <form
                style={{ maxWidth: '20rem', margin: '1rem auto' }}
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    ref="search"
                    style={{ height: '3rem', width: '100%', boxShadow: 'none', border: '2px solid black', padding: '0 1 rem', borderRadius: '2rem', textAlign: 'center' }}
                    placeholder="type username"
                />
                <input type="submit" style={{ width: '100%', padding: '1rem 2rem', border: 'none', margin: '1rem 0 0 0', fontWeight: 700, borderRadius: '.4rem' }} value="Search GitHub User" />
            </form>
        )
    }
}
export default SearchBar