import React from 'react';
import MenuTypeContainer from './menuTypeContainer.jsx';

// This holds the menu which will expand or collapse and fade out
class MenuContainer extends React.Component {
  constructor (props) {
    super(props);
    // console.log('MenuContainer Props: ', props);
    this.state = {
      expanded: false,
      showGradient: true,
    };
  }

  // Button to expand/close the menu
  clickExpandButton() {
    const newExpanded = !this.state.expanded;
    const newShowGradient = !this.state.showGradient;
    const switchExpandState = this.switchExpandState.bind(this, newExpanded);
    
    this.setState({
      showGradient: newShowGradient,
    }, () => {
      switchExpandState();
    });
  }

  // Highlight the expand button
  mouseEnterButton() {
    this.setState({
      mouseOver: true
    });
  }

  mouseExitButton() {
    this.setState({
      mouseOver: false
    });
  }

  switchExpandState(newExpanded) {
    this.setState({
      expanded: newExpanded,
    });
  }

  

  render() {
    const styles = {
      container: {
        marginTop: '16px',
        paddingBottom: '32px',
        borderBottom: '1px solid #d8d9db',
        borderTop: '1px solid #d8d9db',
        display: 'block',
        overflow: 'hidden',
        height: this.state.expanded ? 'auto' : '450px',
        position: 'relative',
        marginBottom: this.state.expanded ? '50px' : 0,
        width: '640px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      gradient: {
        zIndex: 2,
        height: '82%', 
        width: '100%', 
        position: 'absolute',
        bottom: '0px',
        backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 1)), color-stop(0.7,#fff))',
        display: this.state.showGradient ? 'block' : 'none',
        transitionDuration: '2s'
      },
      button: {
        fontFamily: 'Brandon, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
        cursor: 'pointer',
        margin: '0 auto 32px auto',
        order: '1px solid #d8d9db',
        background: '0 0',
        padding: '16px',
        fontSize: '16px',
        lineHeight: '1rem',
        fontWeight: 500,
        width: '18rem',
        borderRadius: '2px',
        zIndex: 4,
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        outline: 'none',
        boxShadow: 'rgba(51,51,51,.2) 0 2px 4px',
        border: this.state.mouseOver ? '2px solid #da3743' : '1px solid #d8d9db',
        bottom: this.state.mouseOver ? '-1px' : '0px',
      },  
    };
    // this sorts menu items by their "type" ... stored as single_menu_item
    let itemObject = {};
    this.props.items.forEach(item => {
      if (!itemObject[item.single_menu_item]) {
        itemObject[item.single_menu_item] = [];
      }
      itemObject[item.single_menu_item].push(item);
      /* ORIGINAL CODE.
      if (!itemObject[item.type]) {
        itemObject[item.type] = [];
      }
      itemObject[item.type].push(item);
      */ 
    });
    // console.log('item object', itemObject)
    let key = 0;
  
    const menuTypeContainers = Object.keys(itemObject).map(type => {
      const lastType = (type === Object.keys(itemObject)[Object.keys(itemObject).length - 1]);
      key++;
      return <MenuTypeContainer key={key} items={itemObject[type]} itemsType={type} lastType={lastType} />;
    });

    return (
      <div>
        <div style={styles.container}>
          <div style={styles.gradient}></div>
          <div>{menuTypeContainers}</div>
          <button 
            onMouseEnter={this.mouseEnterButton.bind(this)} 
            onMouseLeave={this.mouseExitButton.bind(this)} 
            onClick={this.clickExpandButton.bind(this)}
            style={styles.button}>
            {this.state.expanded ? 'Collapse menu' : 'View full menu'}
          </button>
        </div>
      </div>
    );
  }
}




export default MenuContainer;
