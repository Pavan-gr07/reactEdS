import { Component } from "react";
import './cards.css';

class Cards extends Component {
    render() {
        return (
            <div>
                <h1>Latest Posts</h1>
                <div className="Filters">
                    <h3>Filter by Category</h3>
                    <div className="filterSection">
                        <button>All</button>
                        <button>Artificial Intelligence</button>
                        <button>Cloud Computing</button>
                        <button>DevOps</button>
                        <button>Programming Languages</button>
                        <button>Mobile Application Development</button>
                        <button>Technology and Tools</button>
                        <button>Get a job in a Tech Company</button>
                        <button>Others</button>
                    </div>
                </div>
                <div className="cardsSection">
                    <div className="cards">
                        <div className="ImageSection">
                            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" alt="" />
                        </div>
                        <div className="textcontent">
                            <h3>Fresh Graduate or IT professional Looking for.....</h3>
                            <h4>Arman Ahmed  <span>| 05 JUL 2019</span></h4>
                            <p>
                                The term Income Share Agreement has been around for a long time
                                since 1955 to be precise. Surprised, eh? It was first introduced
                                by Milton Friedman,
                            </p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="ImageSection">
                            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png" alt="" />
                        </div>
                        <div className="textcontent">
                            <h3> Practical Machine Learning with Python and Keras</h3>
                            <h4>Daniel Pyrathon  <span>| 16 Oct 2019</span></h4>
                            <p>
                                Machine learning is a field of artificial intelligence that uses
                                statistical techniques to give computer systems the ability to
                                “learn” (e.g., progressively)
                            </p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="ImageSection">
                            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" alt="" />
                        </div>
                        <div className="textcontent">
                            <h3>Challenges of Machine Learning in Big Data Analytics</h3>
                            <h4>  EdYoda<span> | 24 Aug 2019</span></h4>
                            <p>
                                Machine Learning is a subset of artificial intelligence which is
                                an important part of computer science. The revolution of Big
                                Data promises to transform the
                            </p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="ImageSection">
                            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" alt="" />
                        </div>
                        <div className="textcontent">
                            <h3>Impact of Cloud Computing in various industries</h3>
                            <h4>Arman Ahmed | <span>05 JUL 2019</span></h4>
                            <p>
                                Cloud computing has been rapidly gaining pace in the world of
                                information technology. It has been observed that over 90% of
                                global enterprises are using cloud
                            </p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="ImageSection">
                            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png" alt="" />
                        </div>
                        <div className="textcontent">
                            <h3>Breaking the Myths around Cybersecurity</h3>
                            <h4>EdYoda <span>| 26 Aug 2019</span></h4>
                            <p>
                                Cybersecurity plays an integral role in the process of good
                                business models. But even cybersecurity programs built with good
                                intentions can fall short in
                            </p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="ImageSection">
                            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" alt="" />
                        </div>
                        <div className="textcontent">
                            <h3>LAMP Stack Vs MEAN stack: Choosing the right platform.</h3>
                            <h4>Arman Ahmed | <span>05 Aug 2019</span></h4>
                            <p>
                                In today's dynamic world, developing a rapid application with a
                                smooth user interface that can adapt to specific features is the
                                main business requirement. Many
                            </p>
                        </div>
                    </div>


                </div>
            
            </div>
        )
    }
}

export default Cards;