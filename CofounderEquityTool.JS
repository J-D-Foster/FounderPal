console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function() {
    // Objects storing related elements
    const cofounders = Array.from({ length: 4 }, (_, i) => ({
        num: i + 1,
        nameInput: document.getElementById(`Cofounder${i + 1}-Name`),
        nameLabel: document.getElementById(`Cofounder${i + 1}NameLabel`),
        ceoLabel: document.getElementById(`CEOCofounder${i + 1}Label`),
        ideaLabel: document.getElementById(`IdeaLabelCofounder${i + 1}`),
        ideasGuyLabel: document.getElementById(`IdeasGuyLabel${i + 1}`),
        industryExpertiseLabel: document.getElementById(`IndustryExpertiseLabel${i + 1}`),
        startupExperienceLabel: document.getElementById(`StartupExperienceLabel${i + 1}`),
        pitchingLabel: document.getElementById(`PitchingLabel${i + 1}`),
        capitalAccessLabel: document.getElementById(`CapitalAccessLabel${i + 1}`),
        ceoInput: document.getElementById(`CEOCofounder${i + 1}`),
        ideaInput: document.getElementById(`IdeaBoxCofounder${i + 1}`),
        ideasGuyInput: document.getElementById(`IdeasGuyBox${i + 1}`),
        industryExpertiseInput: document.getElementById(`IndustryExpertiseBox${i + 1}`),
        startupExperienceInput: document.getElementById(`StartupExperienceBox${i + 1}`),
        pitchingInput: document.getElementById(`PitchingBox${i + 1}`),
        capitalInput: document.getElementById(`CapitalAccessBox${i + 1}`),
    }));

    const seekingInvestmentYes = document.getElementById('SeekingInvestmentRadioYes');
    const seekingInvestmentNo = document.getElementById('SeekingInvestmentRadioNo');
    const pitchingToInvestorsQuestion = document.getElementById('InvestorsPitchQuestion');
    const accessToCapitalQuestion = document.getElementById('CapitalAccessQuestion');
    const numCofoundersInput = document.getElementById('NumCofounders');

    const points = [0, 0, 0, 0];
    const prevState = {
        CEOCofounder: [false, false, false, false],
        IdeaBoxCofounder: [false, false, false, false],
        IdeasGuyBox: [false, false, false, false],
        IndustryExpertiseBox: [false, false, false, false],
        StartupExperienceBox: [false, false, false, false],
        PitchingBox: [false, false, false, false],
        CapitalAccessBox: [false, false, false, false]
    };

    // Function to show or hide new questions
    function showOrHideNewQuestions() {
        if (seekingInvestmentYes.checked) {
            pitchingToInvestorsQuestion.style.display = "block";
            accessToCapitalQuestion.style.display = "block";
        } else {
            pitchingToInvestorsQuestion.style.display = "none";
            accessToCapitalQuestion.style.display = "none";
        }
    }

    // Event listeners for the 'Seeking Investment' radio buttons
    seekingInvestmentYes.addEventListener('change', showOrHideNewQuestions);
    seekingInvestmentNo.addEventListener('change', showOrHideNewQuestions);

    function updatePointsForInput(inputIDPrefix, pointValue) {
        for (const cofounder of cofounders) {
            if (cofounder[inputIDPrefix + 'Input']) {
                if (cofounder[inputIDPrefix + 'Input'].checked) {
                    if (!prevState[inputIDPrefix][cofounder.num - 1]) {
                        points[cofounder.num - 1] += pointValue;
                        prevState[inputIDPrefix][cofounder.num - 1] = true;
                    }
                } else {
                    if (prevState[inputIDPrefix][cofounder.num - 1]) {
                        points[cofounder.num - 1] -= pointValue;
                        prevState[inputIDPrefix][cofounder.num - 1] = false;
                    }
                }
            }
        }
    }

    // Listeners for input elements
    for (const cofounder of cofounders) {
        // Cofounder's Name
        cofounder.nameInput.addEventListener('change', function() {
            cofounder.nameLabel.innerText = cofounder.nameInput.value;
        });

        // Cofounder's CEO role
        cofounder.ceoInput.addEventListener('change', function() {
            updatePointsForInput('CEOCofounder', 20);
        });

        // Cofounder's Idea
        cofounder.ideaInput.addEventListener('change', function() {
            updatePointsForInput('IdeaBoxCofounder', 25);
        });

        // Cofounder's Ideas Guy
        cofounder.ideasGuyInput.addEventListener('change', function() {
            updatePointsForInput('IdeasGuyBox', 15);
        });

        // Cofounder's Industry Expertise
        cofounder.industryExpertiseInput.addEventListener('change', function() {
            updatePointsForInput('IndustryExpertiseBox', 10);
        });

        // Cofounder's Startup Experience
        cofounder.startupExperienceInput.addEventListener('change', function() {
            updatePointsForInput('StartupExperienceBox', 5);
        });

        // Cofounder's Pitching Skill
        cofounder.pitchingInput.addEventListener('change', function() {
            updatePointsForInput('PitchingBox', 10);
        });

        // Cofounder's Access to Capital
        cofounder.capitalInput.addEventListener('change', function() {
            updatePointsForInput('CapitalAccessBox', 15);
        });
    }

    // Listener for number of cofounders
    numCofoundersInput.addEventListener('change', function() {
        const numCofounders = Number(numCofoundersInput.value);
        for (let i = 0; i < 4; i++) {
            if (i < numCofounders) {
                document.getElementById(`Cofounder${i + 1}`).style.display = "block";
            } else {
                document.getElementById(`Cofounder${i + 1}`).style.display = "none";
            }
        }
    });
});

