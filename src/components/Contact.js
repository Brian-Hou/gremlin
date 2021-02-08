import React, {Component,Fragment} from 'react';
import {Container, Navbar, Row, Col, Card, Image} from "react-bootstrap";
import './styles/splash.css';


import AppNav from "./AppNav";
class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render () {
        const {loading,response,loading_asset,response_asset} = this.state;
        return (
            <div>
                <AppNav>
                    <Container style={{minHeight: '100vh'}} >
                        <Row className={'mb-5'}>
                            <Col md={6} className={'mt-5'}>
                                <h1 className={'border-boxed p-3 text-left mb-5 mw-fit-content'}>Donate</h1>
                                <Row>
                                   <Col md={6}>
                                       <Image fluid src={'https://static.wixstatic.com/media/578455_5dfc2ec5293c4bc6a59ae5b53bd89d39~mv2.png/v1/fill/w_442,h_484,al_c,lg_1,q_85/578455_5dfc2ec5293c4bc6a59ae5b53bd89d39~mv2.webp'}/>
                                   </Col>
                                    <Col md={6}>
                                        <h2>How</h2>
                                        <ol>
                                            <li>Create a wallet on https://lobstr.co/</li>
                                            <li>Fund it with XLM</li>
                                            <li>Use the QR code on the left and pick the amount you would like to donate!</li>
                                        </ol>
                                        <h2>Amount</h2>
                                        <div>Donate as little as 1 XLM</div>
                                        <h2>Memo</h2>
                                        <div>write your name to join the guild list</div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className={'mt-5'}>
                                <h1 className={'grey-blockquote mw-fit-content mb-4'}>Guild List</h1>
                                <ul>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>1 XLM: Gremlin</span> - Julie Kim, ever0602</li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>100 XLM: Knight</span> -</li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>500 XLM: Commander</span> - decentralization44</li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>50,000 XLM: Lord</span> -</li>
                                    </strong>
                                    <strong className={'mt-4'}>
                                        <li><span style={{fontSize: 24}}>500,000 XLM: Chamath</span> -</li>
                                    </strong>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={'my-4'}>
                                    <h2 className={'framed-yellow mw-fit-content mb-4'}>Bounty</h2>
                                    <ul>
                                        <li>1 XLM back: for donating any amount!</li>
                                        <li>5 XLM: for user interface improvement</li>
                                        <li>5 XLM: for code improvement</li>
                                        <li>10 XLM: for finding a bug/security issue</li>
                                        <li>10 XLM for any thoughtful Reddit post that explains the concepts and garners 50K upvotes</li>
                                        <li>10 XLM donated to charity of choice if Chamath contacts us</li>
                                        <li>10 XLM donated to charity of choice AOC contacts us</li>
                                        <li>10 XLM donated to charity of choice DeepFuckingValue makes a 5 min video explaining Gremlin</li>
                                        <li>20 XLM/Month salaried position for a permanent</li>
                                        <li>20 XLM/Month to lawyer on retainer</li>
                                        <li>100 XLM to the first company that sells their stocks</li>
                                        <li>100 XLM to Melvin to lay down their weapons and repay their debts</li>
                                        <li>1000 XLM to the brokerage that decided to host us</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row className={'my-5'}>
                            <Col>
                                <h2 className={'border-boxed p-3 text-left mb-5 mw-fit-content'}>Get in Touch</h2>
                                <p>We need help from everyone to get this funded, developed, and approved by the SEC! ​We need lawyers, developers, marketers, politicians, and people of all talents and influence. This Smart Contract needs the support and approval of every player. Join the guild above and begin participating in the greatest movement in the history of Finance.</p>
                                <ul>
                                    <li>Follow us on Reddit: u/Gremlin-endgame</li>
                                    <li>Join Discord:</li>
                                    <li>Call: 714-393-1487</li>
                                    <li>Write: info@endgame.is</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className={'mb-5'}>
                            <Col>
                                <h1 className={'border-boxed p-3 text-left mb-5 mw-fit-content'}>Join the Good Fight!</h1>
                                <p>Want to help? Have questions about the goals and motivations behind Endgame? Just want to say hello?</p>
                                <p><a href="mailto:info@gremlin.endgame.com">Send Gremlin an Email</a></p>
                            </Col>
                        </Row>
                    </Container>
                </AppNav>
            </div>
        )
    }
}

export default Contact;