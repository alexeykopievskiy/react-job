import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Help.css';
import { connect } from 'react-redux';
import { getNews as getNewsAction } from '../../actions/news';
import { content as selectContent } from '../../reducers/content';

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
    const { path, locale, news, getNews } = props || this.props;

    if (!news) {
      getNews();
    }

  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>... new route</p>
        </div>
      </div>
    );
  }
}

const mapState = (state, props) => ({
  news: state.news
});

const mapDispatch = {
  getNews: getNewsAction,
};

const EnhancedContent = connect(mapState, mapDispatch)(Help);

export default withStyles(s)(EnhancedContent);
