import React from 'react';

import ProjectListItem from './list-item';

export default class ProjectList extends React.Component {

  render() {
      let projects = this.props.app.projects || [];
      return (
              <ul>
              {
                  projects.map((item, key) => {
                      return (
                          <ProjectListItem
                             key={ key }
                             plugin={ this.props.app.plugin }
                             app={this.props.app}
                             project={ item } />
                      );
                  })
              }
          </ul>
      );
  }
}
