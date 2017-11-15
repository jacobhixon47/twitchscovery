import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  twitchEmbed
} from '../../modules/twitch';
import './style.css';


const Home = props => (
  <div style={{textAlign: "center"}} id="home">
    <h1>Home</h1>

    <p>
      <button onClick={props.twitchEmbed}>Twitch!</button>
    </p>

    <div id="twitch-embed" />

    <p>
      <button onClick={() => props.changePage()}>Go to about page via redux</button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  embed: twitchEmbed
});

const mapDispatchToProps = dispatch => bindActionCreators({
  twitchEmbed,
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
