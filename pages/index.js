import React, { Component } from 'react';
import { Link, Router } from "../routes";
// import RTC from "../libs/rtc";
import Head from 'next/Head';
import Board from '../components/Board';

const isClient =
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement;

export default class extends Component {
  static async getInitialProps({ query }) {
    return query;
  }

  state = {
    visible: 0,
    alert: false,
    alertText: "Test",
    connected: false,
    channel: "share",
    userID: undefined,
    peers: [],
    title: "Waiting for peers to connect...",
    history: [
      { msg: "Waiting for a peer...", type: "system", time: Date.now() }
    ],
    message: ""
  };

  componentDidMount() {
    // if (this.props.id === undefined) {
    //   Router.pushRoute(`/`);
    // }
    // console.log("Channel ID: " + this.props.id);
    setTimeout(() => {
      // this.setState({ visible: 1 });
    }, 300);
    // this.initChannel();
  }

  // initChannel = async () => {
  //   console.log("Init channel ID", this.props.id);
  //   var started = false;
  //   var peer = await RTC.initChannel(this.props.id);
  //   this.setState({
  //     userID: peer.id
  //   });
  //   var Events = RTC.getEvents();

  //   RTC.connectToPeers(this.props.id);

  //   Events.on("message", async message => {
  //     console.log(`Message: ${message.connection.peer}:`, message.data);

  //     if (message.data.cmd === "message") {
  //       this.updateHistory({
  //         msg: message.data.msg,
  //         type: "partner",
  //         sender: message.connection.peer,
  //         time: Date.now()
  //       });
  //     } else if (message.data.cmd === "error") {
  //       this.updateHistory({
  //         msg: `${message.data.error}`,
  //         type: "system",
  //         sender: message.connection.peer,
  //         time: Date.now()
  //       });
  //       this.setState({
  //         alert: true,
  //         alertText: message.data.error
  //       });
  //     }
  //   });
  //   Events.on("peerJoined", async message => {
  //     console.log(`Peer Joined:`, message.connection.peer);
  //     this.updateHistory({
  //       msg: "Peer Connected",
  //       type: "system",
  //       sender: message.connection.peer,
  //       time: Date.now()
  //     });
  //     this.setState({
  //       channel: "connected",
  //       peers: [...new Set([...this.state.peers, message.connection.peer])],
  //       title: "Channel established"
  //     });
  //   });
  //   Events.on("peerLeft", message => {
  //     console.log("Peer Left:", message.connection.peer);
  //     this.updateHistory({
  //       msg: "Peer Disconnected",
  //       type: "system",
  //       sender: message.connection.peer,
  //       time: Date.now()
  //     });
  //     this.setState({
  //       channel: "share",
  //       peers: this.state.peers.filter(item => item != message.connection.peer),
  //       title: "Waiting for peers to connect..."
  //     });
  //     RTC.connectToPeers(this.props.id);
  //   });
  // };

  // updateHistory = data => {
  //   var history = this.state.history;
  //   history.push(data);
  //   this.setState({ history });
  // };

        //   {this.state.title}
        // {this.state.peers.length > 0}
        // <p>Your ID: {this.state.userID}</p>
        // <p>Connected peers: {this.state.peers.length}</p>
        // <br />
        // <p>Share this room link with your partner:</p>
        // <p>{isClient ? window.location.href : null}</p>

  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <title>Togetherness</title>
          <link href="//db.onlinewebfonts.com/c/4b76b99051d6848168d9f187b7eeb9c1?family=RosewoodW01-Regular" rel="stylesheet" type="text/css"/>
        </Head>
        { // <p>Why not invite a friend so that you can play together? {isClient ? window.location.href : null} </p>
        }
        <Board>
          {children}
        </Board>
        { // <p className="credits">RTC functionality created by mariocao here: https://github.com/mariocao/next-webrtc</p>
        }
        <style jsx>{`
          p {
            font-family: arial;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
          }
          .credits {
            font-size: 10px;
            text-transform: none;
          }

          `}
        </style>
      </div>

    );
  }
}
