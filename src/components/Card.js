import React, { Component } from 'react';

class Card extends Component {
    render() {
        let data = this.props.data;
        if (data.notFount === 'Not Found') {
            return <h3 className="card_notFound">User not found. Try agian</h3>
        }
        else {
            return (
                <div style={{ position: 'relative', maxWidth: '20rem', margin: '7rem auto 2rem', border: 'solid 5px black', borderRadius: '.4rem', padding: '5.5rem 2.5rem 1rem' }}>
                    <a href={data.url} target="_blank">
                        <img style={{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%,-50%)', width: '10rem', height: 'auto', margin: '0 auto', display: 'block', borderRadius: '50%', padding: '5px', maxWidth: '100%', transition: '0.2s' }} src={data.avatar} alt={data.name} />
                    </a>
                    <h2 style={{ fontSize: '2rem', fontWeight: '900', textAlign: 'center', margin: '1rem auto' }}>
                        <a style={{ color: 'white', borderBottom: 'solid 2px white', textDecoration: 'none', marginBottom: '0', paddingBottom: '0' }} href={data.url} target="_blank">{data.username}</a>
                    </h2>
                    <dl style={{ margin: '0', padding: '0' }}>
                        <dt style={{ textAlign: 'center', fontWeight: '900', marginBottom: '.2rem' }}>Real name</dt>
                        <dd style={{ textAlign: 'center', margin: '0 0 1rem 0' }}>{data.realName}</dd>

                        <dt style={{ textAlign: 'center', fontWeight: '900', marginBottom: '.2rem' }}>Location</dt>
                        <dd style={{ textAlign: 'center', margin: '0 0 1rem 0' }}>{data.location}</dd>

                        <dt style={{ textAlign: 'center', fontWeight: '900', marginBottom: '.2rem' }}>Number of public repos</dt>
                        <dd style={{ textAlign: 'center', margin: '0 0 1rem 0' }}>{data.repos}</dd>

                        <dt style={{ textAlign: 'center', fontWeight: '900', marginBottom: '.2rem' }}>Number of followers</dt>
                        <dd style={{ textAlign: 'center', margin: '0 0 1rem 0' }}>{data.followers}</dd>
                    </dl>
                </div>
            )
        }
    }
}
export default Card;