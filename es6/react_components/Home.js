import React from 'react'
import StatPanel from './StatPanel'
import TweetInput from './TweetInput'
import MarketingPanel from './MarketingPanel'
import IncrementingNumber from './IncrementingNumber'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <MarketingPanel />
        <aside>
          <StatPanel desc="Tweets Analyzed">
            <IncrementingNumber className="statPanel-stat" start={12404204}/>
          </StatPanel>
          <StatPanel desc="Accuracy" stat="99%"/>
          <TweetInput />
        </aside>
      </div>
    )
  }
}

export default Home
