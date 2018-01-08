
import React from 'react';

import ProjectList from 'l10n-tools/sidebar/apps/projects/list';
import LocaleList from 'l10n-tools/sidebar/apps/locales/list';


export default class AppInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {projects: false, locales: false};
    }

    handleToggleLocales(evt) {
        evt.preventDefault();
        const {locales} = this.state;
        this.setState({locales: !locales})
    }

    handleToggleProjects(evt) {
        evt.preventDefault();
        const {projects} = this.state;
        this.setState({projects: !projects})
    }

    render_() {
        return (
            <dd>{this.props.app.name}</dd>);
    }

    render() {
        const {locales} = this.state;
        const {projects} = this.state;
        let localesClass = 'hidden';
        let projectsClass = 'hidden';
        if (locales) {
            localesClass = '';
        }
        if (projects) {
            projectsClass = '';
        }
        return (
            <dd>
              <dl>
                <dd>{this.props.app.url}</dd>
                <dd>{this.props.app.updated}</dd>
                <dt>
                  <a href="#" onClick={ this.handleToggleLocales.bind(this) }>&gt;</a>
                  <img src="/images/language.svg" width="16px" />
                  Locales
                </dt>
                <dd className={localesClass}>
                  <LocaleList
                     app={ this.props.app } />
                </dd>
                <dt>
                  <a href="#" onClick={ this.handleToggleProjects.bind(this) }>&gt;</a>
                  <img src="/images/project.svg" width="16px" />
                  Projects
                </dt>
                <dd className={projectsClass}>
                  <ProjectList
                     app={this.props.app} />
                </dd>
              </dl>
            </dd>
        );
    }
}
