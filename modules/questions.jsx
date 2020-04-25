import React, { Component } from "react";
import Question from "./question";
import Results from "./results";
import * as qs from "query-string";

class Questions extends Component {
  state = {
    questions: [],
    curQuestion: {},
    curIndex: 0,
    correct: "",
    incorrectAnswers: [],
    score: 0,
    isAnswered: false,
    isCorrect: false,
    isTimeUP: false,
    isJokerUsed: false
  };

  componentDidMount() {
    /* Get Level and Category from URL */
    const parsed = qs.parse(this.props.location.search);
    const { cat, level } = parsed;

    /* API call with regarding cat and level */
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${level}&type=multiple`
    )
      .then(res => res.json())
      .then(data => {
        /* Format the response coming from API */
        let formattedResults = data.results.map((val, index) => {
          return {
            key: index,
            question: this.decodeHtml(val.question),
            correctAnswer: this.decodeHtml(val.correct_answer),
            incorrectAnswers: val.incorrect_answers
          };
        });
        /* Set state for first question */
        this.setState({
          questions: formattedResults,
          curQuestion: formattedResults[0],
          curIndex: 0,
          correct: formattedResults[0].correctAnswer,
          incorrectAnswers: formattedResults[0].incorrectAnswers
        });
      })
      .catch(console.log);
  }

  wrongAnswer = () => {
    let { score } = this.state;

    this.setState({
      score: score,
      isAnswered: true,
      isCorrect: false
    });
  };

  rightAnswer = () => {
    let { questions, curIndex, score } = this.state;

    curIndex = questions.length === curIndex + 1 ? 0 : ++curIndex;
    score += 100;
    /* Set state for next question */
    this.setState({
      curIndex: curIndex,
      score: score,
      curQuestion: questions[curIndex],
      correct: questions[curIndex].correctAnswer,
      incorrectAnswers: questions[curIndex].incorrectAnswers,
      isAnswered: true,
      isCorrect: true
    });
  };

  checkAnswer = val => {
    val.target.innerHTML === this.state.correct
      ? this.rightAnswer()
      : this.wrongAnswer();
  };

  /* decide question page or result page will be displayed */
  nextQuestion = () => this.setState({ isAnswered: false });

  /* when time is up */
  timeUP = () =>
    this.setState({ isTimeUP: true, curIndex: this.state.curIndex + 1 });

  /* For html entity decode coming from API */
  decodeHtml = html => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  /* Remove 2 choices when joker is used */
  useJoker = () => {
    const { isJokerUsed, incorrectAnswers } = this.state;
    if (!isJokerUsed) {
      this.setState({
        incorrectAnswers: incorrectAnswers.slice(1, 2),
        isJokerUsed: true
      });
    }
  };

  render() {
    const {
      curQuestion,
      curIndex,
      correct,
      incorrectAnswers,
      score,
      isAnswered,
      isCorrect,
      isTimeUP,
      isJokerUsed
    } = this.state;

    /* Correct answer's order should be random or they will say 'SIFRE VAR' */
    let choices = [...incorrectAnswers, correct];
    choices = choices.map(item => this.decodeHtml(item));
    choices.sort(() => Math.random() - 0.5);

    return (
      <div>
        {/* For Question Page */}
        {!isAnswered && !isTimeUP && (
          <Question
            curQuestion={curQuestion}
            curIndex={curIndex}
            correct={correct}
            incorrectAnswers={incorrectAnswers}
            score={score}
            choices={choices}
            checkAnswer={this.checkAnswer}
            timeUP={this.timeUP}
            useJoker={this.useJoker}
            isJokerUsed={isJokerUsed}
          />
        )}
        {/* For Result Page - Time is UP */}
        {!isAnswered && isTimeUP && (
          <Results
            curIndex={curIndex}
            score={score}
            timeUP={this.timeUP}
            isTimeUP={isTimeUP}
          />
        )}
        {/* For Result Page - Correct Answer */}
        {isAnswered && isCorrect && (
          <Results
            correct={true}
            curIndex={curIndex}
            score={score}
            nextQuestion={this.nextQuestion}
          />
        )}
        {/* For Result Page - Wrong Answer */}
        {isAnswered && !isCorrect && (
          <Results correct={false} curIndex={curIndex} score={score} />
        )}
      </div>
    );
  }
}

export default Questions;
