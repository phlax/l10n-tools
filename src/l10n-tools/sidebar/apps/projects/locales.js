
import React from 'react';


export default class ProjectLocales extends React.Component {

  render() {
      let localesClass = 'hidden';
      if (this.props.open) {
          localesClass = '';
      }
      return (
          <span>
            <span>locales</span>
            <ul className={localesClass}>
              {
                  this.props.project.localizations.map(locale => {
                      return (
                          <li>{locale.locale.name}</li>
                      );
                  })
              }
            </ul>
          </span>);
  }
}
