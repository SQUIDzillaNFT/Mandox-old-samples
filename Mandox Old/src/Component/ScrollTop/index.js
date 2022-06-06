import React, {Component} from 'react';

class ScrollTop extends Component {
  constructor(props) {
    super(props);

    this.state = {showClass: ""};
    this.scrollTop = this.scrollTop.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 300) {
      this.setState({
        showClass: "show"
      })
    } else {
      this.setState({
        showClass: ""
      })
    }
  }

  scrollTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div className={`back-top-top ${this.state.showClass}`} onClick={this.scrollTop} id="page-up">
        <a><i className="fas fa-arrow-up"></i> Top</a>
      </div>
    );
  }
}

export default ScrollTop;
