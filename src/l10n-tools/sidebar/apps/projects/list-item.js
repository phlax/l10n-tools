
import React from 'react';
import ProjectLocales from './locales';
import ProjectRepositories from './repositories';


export default class ProjectListItem extends React.Component {

  constructor(props) {
      super(props);
      this.state = {open: false, locales: false, repos: false};
  }

  handleToggle(evt) {
      evt.preventDefault();
      const {open} = this.state;
      this.setState({open: !open});
  }

  handleToggleProjectLocales(evt) {
      evt.preventDefault();
      const {locales} = this.state;
      this.setState({locales: !locales});
  }

  handleToggleProjectRepos(evt) {
      evt.preventDefault();
      const {repos} = this.state;
      this.setState({repos: !repos});
  }

  render() {
      const {open} = this.state;
      const {locales} = this.state;
      const {repos} = this.state;
      let projectClass = 'hidden';
      if (open) {
          projectClass = '';
      }
      return (
          <li key={this.props.key}>
            <a href="#" onClick={ this.handleToggle.bind(this) }>&gt;</a>
            <a href={this.props.project.url}>{this.props.project.name}</a>
            <ul className={projectClass}>
              <li>
                <a href="#" onClick={ this.handleToggleProjectLocales.bind(this) }>&gt;</a>
                <img src='/images/language.svg' width="16px"/>
                <ProjectLocales project={this.props.project} open={locales} />
              </li>
              <li>
                <a href="#" onClick={ this.handleToggleProjectRepos.bind(this) }>&gt;</a>
                <img src='/images/repo.svg' width="16px" height="16px" />
                <ProjectRepositories project={this.props.project} open={repos} />
              </li>
            </ul>
          </li>
      );
  }
}
