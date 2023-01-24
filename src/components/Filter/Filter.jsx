import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.scss';

class Filter extends Component {
  static defaultProps = {
    value: '',
  };

  render() {
    const { value, onChange } = this.props;
    return (
      <>
        <label className={styles.label}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            className={styles.input}
            value={value}
            onChange={onChange}
          />
        </label>
      </>
    );
  }
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};