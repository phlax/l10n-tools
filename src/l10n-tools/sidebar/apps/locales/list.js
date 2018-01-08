import React from 'react';

export default class LocaleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  updateLocales(locales) {
      let mangled = [];
      for (var i in locales || []) {
          let locale = locales[i];
          locale.url = this.props.app.url + "/" + locale.code;
          mangled.push(locale)
      }
      this.setState({data: mangled});
  }

  componentDidMount() {
      const $this = this;
      browser.storage.local.get('locales').then(function (result) {
          $this.updateLocales(result.locales || [])
      });

      browser.runtime.onMessage.addListener(request => {
          if (request.message === 'update-locales') {
              $this.updateLocales(request.data);
          }
      });
  }


  componentDidUpdate() {

  }

  render() {
    const {data} = this.state;
    return (
      <ul>
            {
                data.map((item, key) => {
                        return <li key={key}><a href={item.url}>{item.name}</a></li>
                })
            }
      </ul>
    );
  }
}
