import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './phoneList.module.scss';

class PhoneList extends Component {
  static defaultProps = {
    contacts: [],
  };

  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.item}>
              {' '}
              {name} : {number}
              &emsp;
              <button onClick={() => onDelete(id)} className={styles.button}>Delete</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PhoneList;

PhoneList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};