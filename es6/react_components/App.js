import React from 'react'
import SideNav from './SideNav'
import PulseMenu from './PulseMenu'
import TweetsAnalyzed from './TweetsAnalyzed'
import TweetInput from './TweetInput';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <SideNav />
        <PulseMenu />
        <main>
          <h1>SHITI<br/>ALGORITHM</h1>
          <h2>should i tweet it</h2>
          <h4>Big Data</h4>
          <p>
            we crawl the social graph and use big data to feed our quantum decision engine
          </p>
          <h4>Deep Learning</h4>
          <p>SHITI uses deep learning to accurately decide whether or not your tweet is worth tweeting
          </p>
          <h4>Sentience</h4>
          <p>SHITI is sentient and has very good taste in tweets</p>
        </main>
        <aside>
          <TweetsAnalyzed />
          <div className="tweetAnalyzer">
            <div className="tweetAnalyzer-count">
              99.999%
            </div>
            <div className="tweetAnalyzer-desc">
              Accurate
            </div>
          </div>
          <TweetInput />
        </aside>
      </div>
    )
  }
}

export default App
