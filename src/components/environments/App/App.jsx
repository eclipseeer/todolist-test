import React from 'react';
import { Provider } from 'contexts';
import shortid from 'shortid';
import Sidebar from 'components/ecosystems/Sidebar/Sidebar';
import Items from 'components/ecosystems/Items/Items';
import Comments from 'components/ecosystems/Comments/Comments';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateStateFromLocalStorage = this.updateStateFromLocalStorage.bind(this);
    this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this);
    this.state = {
      activeItem: {},
      items: [],
      comments: {},
      addItem: this.addItem.bind(this),
      deleteItem: this.deleteItem.bind(this),
      setActiveItem: this.setActiveItem.bind(this),
      addComment: this.addComment.bind(this),
    };
  }

  addItem(text) {
    const id = shortid.generate();
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        { id, text },
      ],
      comments: {
        ...prevState.comments,
        [id]: [],
      },
    }));
  }

  deleteItem(id) {
    this.setState((prevState) => {
      const activeItem = prevState.activeItem.id === id ? {} : prevState.activeItem;
      const items = prevState.items.filter(el => el.id !== id);
      const comments = { ...prevState.comments };
      delete comments[id];
      return {
        activeItem,
        items,
        comments,
      };
    });
  }

  setActiveItem(id, index) {
    this.setState({
      activeItem: { id, index },
    });
  }

  addComment(id, text) {
    this.setState(prevState => ({
      comments: {
        ...prevState.comments,
        [id]: [...prevState.comments[id], text],
      },
    }));
  }

  saveStateToLocalStorage() {
    const { items, comments } = this.state;
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  updateStateFromLocalStorage() {
    const items = localStorage.getItem('items');
    const comments = localStorage.getItem('comments');
    if (items && comments) {
      this.setState({
        items: JSON.parse(items),
        comments: JSON.parse(comments),
      });
    }
  }

  componentDidMount() {
    this.updateStateFromLocalStorage();
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage,
    );
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Provider value={this.state}>
        <div className="app">
          <Sidebar />
          <Items />
          <Comments activeItem={activeItem} />
        </div>
      </Provider>
    );
  }
}

export default App;
