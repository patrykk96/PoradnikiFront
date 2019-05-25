import React from "react";
import Guide from "../../components/Guides/Guide";

class DashboardGuides extends React.Component {
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
          fileSelected={this.fileSelected}/>
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

export default DashboardGuides;
