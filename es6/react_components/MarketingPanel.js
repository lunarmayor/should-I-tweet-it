import React from 'react'

class MarketingPanel extends React.Component {
  render() {
    return (
      <div className="mPanel">
        <h1 className="mPanel-title">SHITI<br/>ALGORITHM</h1>
        <h2 className="mPanel-subtitle">should i tweet it</h2>
        <h4 className="mPanel-supportTitle">Big Data</h4>
        <p className="mPanel-supportDesc">
          we crawl the social graph and use big data
           to feed our quantum decision engine
        </p>
        <h4 className="mPanel-supportTitle">Deep Learning</h4>
        <p className="mPanel-supportDesc">
          SHITI uses deep learning to accurately decide
           whether or not your tweet is worth tweeting
        </p>
        <h4 className="mPanel-supportTitle">Sentience</h4>
        <p className="mPanel-supportDesc">
          SHITI is sentient and has very good taste in tweets
        </p>
      </div>
    )
  }
}

export default MarketingPanel
