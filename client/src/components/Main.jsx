import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Admin from "./admin/Admin.jsx";

import ErrorBoundary from './ErrorBoundary.jsx';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noIndex: true
    }

  }




  render() {
    return (


<div>
      <head>

      <meta id="no-index" name="robots" content="noindex"></meta>
      </head>
<Navbar/>

      <div>



				</div>

				<div className="banner video_banner">
					<div id="feature" className="bghide"><img id="featureImg" src="http://cdainterview.com/resources/cda-interview-guide.jpg"/>
					<div id="extraContainer11">
						<div className="videoWrapper">
						</div>
					</div>
						<div id="extraContainer1">
						</div>
						<div className="banner-text">



							<div id="extraContainer9" style={{
                    textAlign: "center",
                    lineHeight: "60px",
                    color: "#FFFFFF"
              }}><div id="myExtraContent9" style={{
                    textAlign: "center",
                    lineHeight: "60px",
                    color: "#FFFFFF"
              }}>CDA Interview Guide</div></div>
              	</div>
					</div>
				</div>









        <div className="main-text-body" style={{
          marginLeft: "20px"
        }}>
      <div className="new-line" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", fontWeight: "bold", color: "#000066",
        marginTop:"55px"
      }}>Ultimate Guide to CDA Structured Interview: Tips &amp; Proven Strategies to Help You Prepare &amp; Ace Your CDA Interview </div>
      <div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", fontWeight: "bold", color: "#373737"
      }}>Overview:</div>
      <div className="new-line2" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>The purpose of the dental school interview</div><div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>History and rationale of the CDA interview</div> <div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>Types of Questions</div> <div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>The Seven Competencies</div><div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>Structure of the CDA interview</div>
      <div className="new-line2" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#FF6600"
      }}> <Link to="/how-to-prepare-for-cda-interview" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#FF6600"
      }}>How to prepare for your CDA Interview</Link></div>
      <div className="new-line2" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#FF6600"
      }}> <Link to="/sample-cda-interview-questions" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#FF6600"
      }}>Sample CDA interview questions</Link></div>
      <div className="new-line2" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#FF6600"
      }}>BeMo CDA-structured interview prep program</div>
      <div className="new-line2" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#FF6600"
      }}><Link to="/contact-us" div style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#FF6600"
      }}>Contact Us</Link></div>


<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", fontWeight: "bold", color: "#373737"
      }}>What is the purpose of the dental school interview?</div>

<div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>Regardless of the format of dental school interview (e.g. CDA structured interview, MMI, or Panel interview), the purpose of the interview is rather straightforward and remains constant across the board: to assess the personality and Non-Cognitive Skills (NCSs) of the candidate.</div>



<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>What are NCSs? By these we mean the following: Communication skills, interpersonal skills, ethical and moral decision making capacity, maturity, professionalism, sense of social responsibility, service to community, leadership, initiative, scholarship, ability to collaborate with others, conflict resolution skills, etc.</div>



<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>Research has shown that, although academic performance (i.e. GPA and DAT scores) is a great indicator of didactic abilities in the first and second years of dental school, it provides, however, a very poor predictive value when it comes to future clinical performance. In fact, research shows that, an effective interview process is the best indicator of future clinical performance in the upper years, as it gives insight into the characteristics of the candidate and whether or not there will be a likelihood of future behavioural problems (an issue that dental schools constantly encounter and struggle to overcome). For example, it has been shown that those candidates who are "conscientious" and "open to new experiences" perform more effectively in the third and fourth years of dental school studies, where the education takes place in a clinical setting for the most part.</div>


<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>Thus, dental schools, much like other professional schools, have over the past decade spent a lot of resources to devise the most effective interview process that will give them insight into the NCSs of their future candidates. And of course, for Canadian dental schools the answer has been the Canadian Dental Association's structured interview or CDA structured interviews.</div>



<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", fontWeight: "bold", color: "#373737"
      }}>History, rationale, and the structure of the CDA interview</div>




<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>Recall from our discussion above that we said an effective interview process is the most reliable way to select candidates who perform well clinically. Well in an attempt to test this theory, in 2004, Smithers et al. conducted a study, which produced results that were so shocking, that it unequivocally reinforced the Canadian Dental Association's earlier decision to commission a "new structured interview based on state-of-the-art contemporary interview techniques" (i.e. CDA structured interview)</div>





<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>What were these shocking results you may ask? The evidence gathered by Smithers et al. (2004) simply reinforced earlier suspicions about the ineffectiveness of traditional interview processes. They showed that, "a typical [traditional] admissions interview was in fact worse than neutral in that it was negatively associated with students' performance in the first year of dental training, did not predict academic performance, and may have led to poor selection decisions." Thus, it should come as no surprise that the traditional panel interview has been replaced by most dental school with the CDA structured interview, which is a more reliable and valid future predictor of clinical performance.</div>




<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>The CDA interview was not only re-structured in its format of delivery, but it was also restructured in terms of the type of questions that would be ask, and how they would be rated or scored by the interviewers. Let us first talk about the type of questions that you may encounter on your CDA structured interview.</div>



<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", fontWeight: "bold", color: "#373737"
      }}>Types of Questions</div>


<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>The types of questions that you may be asked during your dental school interview can be divided into two categories: (1) Situational Interview (SI) questions and (2) Patterned Behaviour Descriptive Interview (PBDI) questions. SI questions are those in which the candidates is placed in a hypothetical situations (i.e. vignette) and is asked what they would react in that given situation. For example,</div>



<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>"You are babysitting your sister’s young child, who is nervous and upset about his mother being away. You are trying to calm him down and offer him some ice cream. As you are dishing out the ice cream, the child bites down hard on your hand. How would you react?"</div>



<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>Conversely, PBDI type questions, ask the candidates "about past behaviour with the assumption that past behaviour is the best predictor of future behaviour." An example of a PBDI type questions is:</div>



<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>Many of us have had to deal with juggling busy schedules. Think of a time in the past when an important but unscheduled situation arose that required your attention, but you had a number of prior commitments on your agenda. What did you do? What was the outcome?</div>



<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>Notice how SI questions are typically future-oriented, as opposed to PBDI questions, which are past-oriented. The specific and actual SI and PBDI questions are devised according to seven competencies, that the CDA has found to be reliable and valid indicators of future performance. In other words, every question that is asked during a dental school interview, regardless of being a SI or PBDI question, will address one or more than one of the seven competencies.</div>


<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", fontWeight: "bold", color: "#373737"
      }}>The Seven Competencies</div>


      <div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>1. Communication: does the applicant have excellent communication skills?</div>


<div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>2. Conscientiousness: is the applicant thorough, careful to do tasks well?</div>


<div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>3. Integrity : is the applicant honest with themselves and others?</div>


<div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>4. Judgment and analysis: does the applicant have the capability to make sound judgments? Do they gather all the facts before making a decision?</div>


<div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>5. self-control : Does the applicant remain calm and in control in difficult situations?</div>


<div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>6. sensitivity to others : Does the applicant show empathy towards others? Do they take the feelings of others into consideration?</div>


<div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>7. Tact and diplomacy : Does the applicant show sensitivity in dealing with difficult issues? Does the applicant possess the necessary skills to deal with others without causing negative feelings?</div>


<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", fontWeight: "bold", color: "#373737"
      }}>Structure of the CDA interview</div>


<div className="new-line2" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>The CDA structured interview is comprised of seven questions, one for each of the seven competencies described above. Each question, which can either be a SI or a PBDI type, is scored on a 5-point scale for a total and a maximum of 35 points by two interviewers who are either a pair of dentists, or senior dental students. The interview usually takes about 20-30 minutes to be completed.</div>

<div className="new-line" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}> Click <span style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#FF6600"
      }}>here</span> to learn how to prepare for your CDA interview </div>


      <div className="new-line" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}> Click <span style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#FF6600"
      }}>here</span> to practice with our sample CDA interview questions</div>



      <div className="new-line" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}> Click <span style={{
         color: "#FF6600"
      }}>here</span> to learn more about our money-back guarantee CDA interview preparation programs.</div>





<div className="new-line" style={{
        font: "16px Arial, Verdana, Helvetica, sans-serif", fontWeight: "bold", color: "#373737"
      }}>Reference:</div>

      <div className="new-line2" style={{
        font: "17px Arial, Verdana, Helvetica, sans-serif", color: "#373737"
      }}>Poole A., Catano, VM., and Cunningham, DP. Predicting performance in Canadian dental schools: the new CDA structured interview, a new personality assessment, and the DAT. Journal of Dental Education. 2007; 71: 664 - 676.</div>
</div>




<ErrorBoundary>
      <Footer/>
</ErrorBoundary>
</div>


    )
  }
}




export default Main;