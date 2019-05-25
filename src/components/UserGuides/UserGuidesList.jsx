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
              key={guide.id}
              id={guide.id}
              guideName={guide.name}
              gameName={guide.gameName}
              username={guide.username}
              guideContent={guide.content} 
              gameImage={guide.gameImage}
              guidesRating={guide.rating}
              showEditOptions={true}
              fileSelected={this.fileSelected} 
              unableEditGuide={this.props.unableEditGuide}
              enableEditGuide={this.props.enableEditGuide}
              submitEditGuide={this.props.submitEditGuide}
              submitDeleteGuide={this.props.submitDeleteGuide}
              enabledEditGuide={this.props.enabledEditGuide}
              handleInputChange={this.props.handleInputChange}
              selectedId={this.props.selectedId}
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
