import React, {Component} from 'react';
import './styles.scss';
import Flickity from 'flickity';

export default class Carousel extends Component {
   static defaultProps = {
      options: {}
   }

   componentDidMount () {
      this.flickity = new Flickity(this.flickityNode, this.props.options)
   }

   renderSlider () {
      if (!this.flickityNode) {
         return null
      }

      const mountNode = this.flickityNode.querySelector('.flickity-slider')

      if (mountNode) {
         return ReactDOM.createPortal(this.props.children, mountNode)
      }
   }

   render () {
      return [
         <div key='slider-base' ref={node => this.flickityNode = node} />,
         this.renderSlider()
      ]
   }
}
