import { Component } from "react";
import { robotService } from "../services/robot.service";

export class ContactDetails extends Component {
  state = {};

  componentDidMount() {
    this.loadRobot();
  }

  loadRobot = async () => {
    try {
      const robot = await robotService.getById(this.props.robotId);
      this.setState({ robot });
    } catch (error) {
      console.log("error:", error);
    }
  };

  render() {
    return <section className="contact-details"></section>;
  }
}
