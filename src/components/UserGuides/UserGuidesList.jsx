import React from "react";
import Guide from "../../components/Guides/Guide";

class UserGuidesList extends React.Component {
  state ={
    isAuthenticated: false
  }

  
  render() {
    let guides = null;

    if (this.props.guides) {
      guides = this.props.guides.map(guide => {
        return (
          <Guide
              id={guide.id} 
              guideName={guide.name}
              gameName={guide.gameName}
              username={guide.username}
              guideContent={guide.content} 
              gameImage={guide.gameImage}
              guidesRating={guide.rating}
              fileSelected={this.fileSelected} 
              unableEditGuide={this.unableEditGuide}
              enableEditGame={this.props.enableEditGame}
              submitEditGuide={this.props.submitEditGuide}
                          />
        );
      }
      );
    }
    return (
      <>
       {guides}
      </>
    );
  }
}

export default UserGuidesList;
