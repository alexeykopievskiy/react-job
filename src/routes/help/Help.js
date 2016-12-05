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
    const { path, locale, news, getNews } = this.props;

    console.log(news,'iii news');

    if (!news) {
      getNews();
    }

    console.log(news,'pppp');

  }

  render() {

    const {news}  = this.props;

    console.log(news,'aaa news');

    console.log(NewsComponent, 'NewsComponent');

    const renderNews = () => {
      if (news) {
        return Object.keys(news).map((key) => {
          console.log(key, 'key');
          console.log(news[key], 'value');
          return (
            <NewsComponent key={key} news={news[key]} />
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
