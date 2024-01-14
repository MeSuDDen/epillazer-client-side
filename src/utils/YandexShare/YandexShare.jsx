import React, { Component } from 'react';

class YandexShare extends Component {
  componentDidMount() {
    window.Ya.share2('ya', {
      theme: { services: 'vkontakte,odnoklassniki,telegram,whatsapp' },
      content: { url: 'example.com' }
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div id="ya" />;
  }
}

export default YandexShare;