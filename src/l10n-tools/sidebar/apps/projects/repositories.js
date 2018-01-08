
import React from 'react';


export default class ProjectLocales extends React.Component {

  render() {
      let reposClass = 'hidden';
      if (this.props.open) {
          reposClass = '';
      }
      return (
          <span>
            <span>Repositories</span>
            <ul className={reposClass}>
              {
                  this.props.project.repositories.map(repo => {
                      return (
                          <li><a href={repo.website}>{repo.website}</a></li>
                      );
                  })
              }
            </ul>
          </span>);
  }
}
