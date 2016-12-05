import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Test.css';
import { connect } from 'react-redux';
import { getWheather as getWheatherAction } from '../../actions/wheather';
import {WheatherComponent} from '../../components/Wheather'

class Test extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    getWheather: PropTypes.func.isRequired,
  };


  componentDidMount() {
    this.maybeFetchData();
  }

  componentWillUpdate(nextProps) {
    this.maybeFetchData(nextProps);
  }

  maybeFetchData(props) {
    const { wheather, getWheather } = this.props;

    if (!wheather) {
      getWheather();
    }

  }

  render() {

    const {wheather}  = this.props;

    console.log(wheather, 'nnn');

    const renderWheather = () => {
      if (wheather) {
        return Object.keys(wheather).map((key) => {
          return (
            <WheatherComponent key={key} wheather={wheather[key]}/>
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
          <p>Moscow</p>
          {renderWheather()}
        </div>
      </div>
    );
  }
}

const mapState = (state, props) => ({
  wheather: state.wheather.wheather.list
});

const mapDispatch = {
  getWheather: getWheatherAction,
};

const EnhancedContent = connect(mapState, mapDispatch)(Test);

export default withStyles(s)(EnhancedContent);
