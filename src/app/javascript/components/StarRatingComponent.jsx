import React, { PropTypes } from 'react';
import { FontIcon } from 'react-toolbox';

class StarRatingComponent extends React.Component {
  icons(totalIcons, iconName, color='grey') {
    const arr = Array(totalIcons).fill(1);
    const icons = arr.map(function(item, index){
      const key = `${index}-${iconName}`;
      return(<FontIcon key={key} style={{color: color}}>{iconName}</FontIcon>);
    });
    return icons;
  }
  rated() {
    return this.icons(this.props.rating, 'star', 'deepskyblue');
  }
  notRated() {
    const notRatedTotal = 5 - this.props.rating;
    return this.icons(notRatedTotal, 'star_border');
  }
  starRating() {
    const notRated = this.notRated();
    const rated = this.rated();
    const stars = [...rated, ...notRated];
    return stars;
  }
  render() {
    return(
      <div>
        {this.starRating()}
    </div>
    );
  }
}
StarRatingComponent.propTypes = {
  rating: PropTypes.number.isRequired
}

export default StarRatingComponent;
