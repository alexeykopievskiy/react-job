import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Help.css';
import { connect } from 'react-redux';
import { getNews as getNewsAction } from '../../actions/news';
import { content as selectContent } from '../../reducers/content';
import {NewsComponent} from '../../components/News'

class Help extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    getNews: PropTypes.func.isRequired,
  };


  componentDidMount() {
    this.maybeFetchData();
  }

  componentWillUpdate(nextProps) {
    this.maybeFetchData(nextProps);
  }

  maybeFetchData(props) {
    const { news, getNews } = this.props;

    if (!news) {
      getNews();
    }

  }

  render() {

    const {news}  = this.props;

    const renderNews = () => {
      if (news) {
        return Object.keys(news).map((key) => {
          return (
            <NewsComponent key={key} news={news[key]} style={s.news}/>
          )
        })
      } else {
        return <div></div>
      }
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>... new route</p>
          { renderNews() }
        </div>
      </div>
    );
  }
}

const mapState = (state, props) => ({
  news: state.news.news
});

const mapDispatch = {
  getNews: getNewsAction,
};

const EnhancedContent = connect(mapState, mapDispatch)(Help);

export default withStyles(s)(EnhancedContent);
