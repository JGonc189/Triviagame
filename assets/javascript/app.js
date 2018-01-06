// create an array that holds the trivia questions
const triviaQuestions = [
	'In S1E1 "Pilot": Who started their first day at Dunder Mifflin Scranton?',
	'In S1E2 "Diversity Day": What famous comedian\'s stand up routine does Michael imitate?',
	'In S1E3 "Health Care": Which of these is NOT one of Jim and Pam\'s made up diseases?',
	'In S1E4 "The Alliance": How much money does Michael donate to Oscar\'s nephew\'s charity, not realizing it is a walk-a-thon and the amount is per mile?',
	'In S1E5 "Basketball": What small appliance of Pam\'s breaks down? (It was given to her at her engagement party three years earlier)'
]

const triviaGame = {
	1: {
		question:'In S1E1 "Pilot": Who started their first day at Dunder Mifflin Scranton?',
		answers: ['Jim Halpert', 'Ryan Howard', 'Michael Scott', 'Erin Hannon'],
		correctAnswer: 'Ryan Howard'
		wrong: 'Incorrect, better luck next time! ¯\\_(ツ)_/¯'
		image: 'assets/images/ryanhoward.gif'
	},

	2: {
		question: 'In S1E2 "Diversity Day": What famous comedian\'s stand up routine does Michael imitate?',
		answers: ['Chris Rock', 'Richard Pryor', 'Robin Williams', 'George Carlin'],
		correctAnswer: 'Chris Rock'
		wrong: 'Incorrect, better luck next time! ¯\\_(ツ)_/¯'
		image: 'assets/images/chrisrock.gif'
	}
}