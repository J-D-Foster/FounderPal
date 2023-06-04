console.log("Script loaded");
document.addEventListener("DOMContentLoaded", function() {
  var numCofoundersInput = document.querySelector('input[name="numCofounders"]:checked');
  var cofounder1NameInput = document.getElementById('Cofounder1-Name');
  var cofounder2NameInput = document.getElementById('Cofounder2-Name');
  var cofounder3NameInput = document.getElementById('Cofounder3-Name');
  var cofounder4NameInput = document.getElementById('Cofounder4-Name');

  var cofounder3NameLabel = document.getElementById('Cofounder3NameLabel');
  var cofounder4NameLabel = document.getElementById('Cofounder4NameLabel');

  var seekingInvestmentYes = document.getElementById('SeekingInvestmentRadioYes');
  var seekingInvestmentNo = document.getElementById('SeekingInvestmentRadioNo');

  var ceoLabel1 = document.getElementById('CEOCofounder1Label');
  var ceoLabel2 = document.getElementById('CEOCofounder2Label');
  var ceoLabel3 = document.getElementById('CEOCofounder3Label');
  var ceoLabel4 = document.getElementById('CEOCofounder4Label');

  var ideaLabel1 = document.getElementById('IdeaLabelCofounder1');
  var ideaLabel2 = document.getElementById('IdeaLabelCofounder2');
  var ideaLabel3 = document.getElementById('IdeaLabelCofounder3');
  var ideaLabel4 = document.getElementById('IdeaLabelCofounder4');

  var ideasGuyLabel1 = document.getElementById('IdeasGuyLabel1');
  var ideasGuyLabel2 = document.getElementById('IdeasGuyLabel2');
  var ideasGuyLabel3 = document.getElementById('IdeasGuyLabel3');
  var ideasGuyLabel4 = document.getElementById('IdeasGuyLabel4');

  var industryExpertiseLabel1 = document.getElementById('IndustryExpertiseLabel1');
  var industryExpertiseLabel2 = document.getElementById('IndustryExpertiseLabel2');
  var industryExpertiseLabel3 = document.getElementById('IndustryExpertiseLabel3');
  var industryExpertiseLabel4 = document.getElementById('IndustryExpertiseLabel4');

  var startupExperienceLabel1 = document.getElementById('StartupExperienceLabel1');
  var startupExperienceLabel2 = document.getElementById('StartupExperienceLabel2');
  var startupExperienceLabel3 = document.getElementById('StartupExperienceLabel3');
  var startupExperienceLabel4 = document.getElementById('StartupExperienceLabel4');

  var pitchingLabel1 = document.getElementById('PitchingLabel1');
  var pitchingLabel2 = document.getElementById('PitchingLabel2');
  var pitchingLabel3 = document.getElementById('PitchingLabel3');
  var pitchingLabel4 = document.getElementById('PitchingLabel4');

  var capitalAccessLabel1 = document.getElementById('CapitalAccessLabel1');
  var capitalAccessLabel2 = document.getElementById('CapitalAccessLabel2');
  var capitalAccessLabel3 = document.getElementById('CapitalAccessLabel3');
  var capitalAccessLabel4 = document.getElementById('CapitalAccessLabel4');

  var ceoInput1 = document.getElementById('CEOCofounder1');
  var ceoInput2 = document.getElementById('CEOCofounder2');
  var ceoInput3 = document.getElementById('CEOCofounder3');
  var ceoInput4 = document.getElementById('CEOCofounder4');

  var ideaInput1 = document.getElementById('IdeaBoxCofounder1');
  var ideaInput2 = document.getElementById('IdeaBoxCofounder2');
  var ideaInput3 = document.getElementById('IdeaBoxCofounder3');
  var ideaInput4 = document.getElementById('IdeaBoxCofounder4');

  var ideasGuyInput1 = document.getElementById('IdeasGuyBox1');
  var ideasGuyInput2 = document.getElementById('IdeasGuyBox2');
  var ideasGuyInput3 = document.getElementById('IdeasGuyBox3');
  var ideasGuyInput4 = document.getElementById('IdeasGuyBox4');

  var industryExpertiseInput1 = document.getElementById('IndustryExpertiseBox1');
  var industryExpertiseInput2 = document.getElementById('IndustryExpertiseBox2');
  var industryExpertiseInput3 = document.getElementById('IndustryExpertiseBox3');
  var industryExpertiseInput4 = document.getElementById('IndustryExpertiseBox4');

  var startupExperienceInput1 = document.getElementById('StartupExperienceBox1');
  var startupExperienceInput2 = document.getElementById('StartupExperienceBox2');
  var startupExperienceInput3 = document.getElementById('StartupExperienceBox3');
  var startupExperienceInput4 = document.getElementById('StartupExperienceBox4');

  var pitchingInput1 = document.getElementById('PitchingBox1');
  var pitchingInput2 = document.getElementById('PitchingBox2');
  var pitchingInput3 = document.getElementById('PitchingBox3');
  var pitchingInput4 = document.getElementById('PitchingBox4');

  var capitalInput1 = document.getElementById('CapitalAccessBox1');
  var capitalInput2 = document.getElementById('CapitalAccessBox2');
  var capitalInput3 = document.getElementById('CapitalAccessBox3');
  var capitalInput4 = document.getElementById('CapitalAccessBox4');

  var pitchingToInvestorsQuestion = document.getElementById('InvestorsPitchQuestion');
  var accessToCapitalQuestion = document.getElementById('CapitalAccessQuestion');

  var pitchingYes = document.getElementById('PitchingBoxYes');
  var pitchingNo = document.getElementById('PitchingBoxNo');
  var capitalAccessYes = document.getElementById('CapitalAccessBoxYes');
  var capitalAccessNo = document.getElementById('CapitalAccessBoxNo');

function hideAllAdditionalInputs() {
  var additionalInputs = [
    cofounder3NameInput, cofounder4NameInput, 
    cofounder3NameLabel, cofounder4NameLabel, 
    ceoLabel3, ceoLabel4, 
    ideaLabel3, ideaLabel4, 
    ceoInput3, ceoInput4, 
    ideaInput3, ideaInput4, 
    ideasGuyInput3, ideasGuyInput4, 
    ideasGuyLabel3, ideasGuyLabel4, 
    industryExpertiseInput3, industryExpertiseInput4, 
    industryExpertiseLabel3, industryExpertiseLabel4, 
    startupExperienceInput3, startupExperienceInput4, 
    startupExperienceLabel3, startupExperienceLabel4,
    pitchingInput3, pitchingInput4, 
    pitchingLabel3, pitchingLabel4,
    capitalInput3, capitalInput4, 
    capitalAccessLabel3, capitalAccessLabel4
  ];

  additionalInputs.forEach(function(input) {
    input.style.display = "none";
  });

  pitchingInput1.style.display = "none";
  pitchingLabel1.style.display = "none";
  capitalInput1.style.display = "none";
  capitalAccessLabel1.style.display = "none";
  pitchingInput2.style.display = "none";
  pitchingLabel2.style.display = "none";
  capitalInput2.style.display = "none";
  capitalAccessLabel2.style.display = "none";
}

function showAdditionalInputs(numCofounders) {
  hideAllAdditionalInputs();
  if (numCofounders >= 1) {
    ceoLabel1.style.display = "block";
    ideaLabel1.style.display = "block";
    ceoInput1.style.display = "block";
    ideaInput1.style.display = "block";
    ideasGuyInput1.style.display = "block";
    ideasGuyLabel1.style.display = "block";
    industryExpertiseInput1.style.display = "block";
    industryExpertiseLabel1.style.display = "block";
    startupExperienceInput1.style.display = "block";
    startupExperienceLabel1.style.display = "block";
  }
  if (numCofounders >= 2) {
    ceoLabel2.style.display = "block";
    ideaLabel2.style.display = "block";
    ceoInput2.style.display = "block";
    ideaInput2.style.display = "block";
    ideasGuyInput2.style.display = "block";
    ideasGuyLabel2.style.display = "block";
    industryExpertiseInput2.style.display = "block";
    industryExpertiseLabel2.style.display = "block";
    startupExperienceInput2.style.display = "block";
    startupExperienceLabel2.style.display = "block";
  }
  if (numCofounders >= 3) {
    cofounder3NameInput.style.display = "block";
    cofounder3NameLabel.style.display = "block";
    ceoLabel3.style.display = "block";
    ideaLabel3.style.display = "block";
    ceoInput3.style.display = "block";
    ideaInput3.style.display = "block";
    ideasGuyInput3.style.display = "block";
    ideasGuyLabel3.style.display = "block";
    industryExpertiseInput3.style.display = "block";
    industryExpertiseLabel3.style.display = "block";
    startupExperienceInput3.style.display = "block";
    startupExperienceLabel3.style.display = "block";
  }
  if (numCofounders == 4) {
    cofounder4NameInput.style.display = "block";
    cofounder4NameLabel.style.display = "block";
    ceoLabel4.style.display = "block";
    ideaLabel4.style.display = "block";
    ceoInput4.style.display = "block";
    ideaInput4.style.display = "block";
    ideasGuyInput4.style.display = "block";
    ideasGuyLabel4.style.display = "block";
    industryExpertiseInput4.style.display = "block";
    industryExpertiseLabel4.style.display = "block";
  }
  
function showOrHideNewQuestions() {
  if (seekingInvestmentYes.checked) {
    pitchingToInvestorsQuestion.style.display = "block";
    accessToCapitalQuestion.style.display = "block";

    if (numCofoundersInput.value >= 1) {
      pitchingInput1.style.display = "block";
      pitchingLabel1.style.display = "block";
      capitalInput1.style.display = "block";
      capitalAccessLabel1.style.display = "block";
    }

    if (numCofoundersInput.value >= 2) {
      pitchingInput2.style.display = "block";
      pitchingLabel2.style.display = "block";
      capitalInput2.style.display = "block";
      capitalAccessLabel2.style.display = "block";
    }

    if (numCofoundersInput.value >= 3) {
      pitchingInput3.style.display = "block";
      pitchingLabel3.style.display = "block";
      capitalInput3.style.display = "block";
      capitalAccessLabel3.style.display = "block";
    }

    if (numCofoundersInput.value == 4) {
      pitchingInput4.style.display = "block";
      pitchingLabel4.style.display = "block";
      capitalInput4.style.display = "block";
      capitalAccessLabel4.style.display = "block";
    }
  } else {
    pitchingToInvestorsQuestion.style.display = "none";
    accessToCapitalQuestion.style.display = "none";
    pitchingInput1.style.display = "none";
    pitchingLabel1.style.display = "none";
    capitalInput1.style.display = "none";
    capitalAccessLabel1.style.display = "none";
    pitchingInput2.style.display = "none";
    pitchingLabel2.style.display = "none";
    capitalInput2.style.display = "none";
    capitalAccessLabel2.style.display = "none";
    pitchingInput3.style.display = "none";
    pitchingLabel3.style.display = "none";
    capitalInput3.style.display = "none";
    capitalAccessLabel3.style.display = "none";
    pitchingInput4.style.display = "none";
    pitchingLabel4.style.display = "none";
    capitalInput4.style.display = "none";
    capitalAccessLabel4.style.display = "none";
  }
}

  var cofounderInputs = document.getElementsByName('numCofounders');
  for (var i = 0; i < cofounderInputs.length; i++) {
    cofounderInputs[i].addEventListener('change', function() {
      showAdditionalInputs(parseInt(this.value));
    });
  }

  cofounder1NameInput.addEventListener('input', function() {
    ceoLabel1.textContent = this.value;
    ideaLabel1.textContent = this.value;
    ideasGuyLabel1.textContent = this.value;
    industryExpertiseLabel1.textContent = this.value;
    startupExperienceLabel1.textContent = this.value;
    pitchingLabel1.textContent = this.value;
    capitalAccessLabel1.textContent = this.value;
  });

  cofounder2NameInput.addEventListener('input', function() {
    ceoLabel2.textContent = this.value;
    ideaLabel2.textContent = this.value;
    ideasGuyLabel2.textContent = this.value;
    industryExpertiseLabel2.textContent = this.value;
    startupExperienceLabel2.textContent = this.value;
    pitchingLabel2.textContent = this.value;
    capitalAccessLabel2.textContent = this.value;
  });

  cofounder3NameInput.addEventListener('input', function() {
    ceoLabel3.textContent = this.value;
    ideaLabel3.textContent = this.value;
    ideasGuyLabel3.textContent = this.value;
    industryExpertiseLabel3.textContent = this.value;
    startupExperienceLabel3.textContent = this.value;
    pitchingLabel3.textContent = this.value;
    capitalAccessLabel3.textContent = this.value;
  });

  cofounder4NameInput.addEventListener('input', function() {
    ceoLabel4.textContent = this.value;
    ideaLabel4.textContent = this.value;
    ideasGuyLabel4.textContent = this.value;
    industryExpertiseLabel4.textContent = this.value;
    startupExperienceLabel4.textContent = this.value;
    pitchingLabel4.textContent = this.value;
    capitalAccessLabel4.textContent = this.value;
  });

  function updateEquitySplits() {
    var totalPoints = points.reduce((a, b) => a + b, 0);
    var equitySplits = points.map((point) => ((point / totalPoints) * 100).toFixed(2));

    var cofounderNames = [
      cofounder1NameInput.value || 'Cofounder 1',
      cofounder2NameInput.value || 'Cofounder 2',
      cofounder3NameInput.value || 'Cofounder 3',
      cofounder4NameInput.value || 'Cofounder 4'
    ];

    document.getElementById('equityCofounder1').textContent = cofounderNames[0] + ': ' + equitySplits[0] + '%';
    document.getElementById('equityCofounder2').textContent = cofounderNames[1] + ': ' + equitySplits[1] + '%';
    if (cofounder3NameInput.style.display !== 'none') {
      document.getElementById('equityCofounder3').textContent = cofounderNames[2] + ': ' + equitySplits[2] + '%';
    } else {
      document.getElementById('equityCofounder3').textContent = '';
    }
    if (cofounder4NameInput.style.display !== 'none') {
      document.getElementById('equityCofounder4').textContent = cofounderNames[3] + ': ' + equitySplits[3] + '%';
    } else {
      document.getElementById('equityCofounder4').textContent = '';
    }
  }

  var points = [0, 0, 0, 0];

  var prevState = {
    'CEOCofounder': [false, false, false, false],
    'IdeaBoxCofounder': [false, false, false, false],
    'IdeasGuyBox': [false, false, false, false],
    'IndustryExpertiseBox': [false, false, false, false],
    'StartupExperienceBox': [false, false, false, false],
    'PitchingBox': [false, false, false, false],
    'CapitalAccessBox': [false, false, false, false]
  };

  function updatePointsForInput(inputIDPrefix, pointValue) {
    for (var i = 0; i < 4; i++) {
      var input = document.getElementById(inputIDPrefix + (i + 1));
      if (input) {
        input.addEventListener('change', function() {
          var index = this.id.charAt(this.id.length - 1) - 1;
          var wasChecked = prevState[inputIDPrefix.charAt(0).toUpperCase() + inputIDPrefix.slice(1)][index];
          if (wasChecked && !this.checked) {
            points[index] -= pointValue;
          } else if (!wasChecked && this.checked) {
            points[index] += pointValue;
          }
          prevState[inputIDPrefix][index] = this.checked;
          updateEquitySplits();
        });
      }
    }
  }

  updatePointsForInput('CEOCofounder', 5);
  updatePointsForInput('IdeaBoxCofounder', 5);
  updatePointsForInput('IdeasGuyBox', 3);
  updatePointsForInput('IndustryExpertiseBox', 5);
  updatePointsForInput('StartupExperienceBox', 5);
  updatePointsForInput('PitchingBox', 5);
  updatePointsForInput('CapitalAccessBox', 10);

  function showOrHideNewQuestions() {
    if (seekingInvestmentYes.checked) {
      pitchingToInvestorsQuestion.style.display = "block";
      accessToCapitalQuestion.style.display = "block";
      if (numCofoundersInput.value >= 3) {
        pitchingInput3.style.display = "block";
        pitchingLabel3.style.display = "block";
        if (numCofoundersInput.value == 4) {
          pitchingInput4.style.display = "block";
          pitchingLabel4.style.display = "block";
        }
      }
      if (numCofoundersInput.value >= 1) {
        capitalInput1.style.display = "block";
        capitalAccessLabel1.style.display = "block";
      }
      if (numCofoundersInput.value >= 2) {
        capitalInput2.style.display = "block";
        capitalAccessLabel2.style.display = "block";
      }
      if (numCofoundersInput.value >= 3) {
        capitalInput3.style.display = "block";
        capitalAccessLabel3.style.display = "block";
      }
      if (numCofoundersInput.value == 4) {
        capitalInput4.style.display = "block";
        capitalAccessLabel4.style.display = "block";
      }
    } else {
      pitchingToInvestorsQuestion.style.display = "none";
      accessToCapitalQuestion.style.display = "none";
      pitchingInput3.style.display = "none";
      pitchingLabel3.style.display = "none";
      pitchingInput4.style.display = "none";
      pitchingLabel4.style.display = "none";
      pitchingYes.checked = false;
      pitchingNo.checked = false;
      capitalAccessYes.checked = false;
      capitalAccessNo.checked = false;
      capitalInput1.style.display = "none";
      capitalAccessLabel1.style.display = "none";
      capitalInput2.style.display = "none";
      capitalAccessLabel2.style.display = "none";
      capitalInput3.style.display = "none";
      capitalAccessLabel3.style.display = "none";
      capitalInput4.style.display = "none";
      capitalAccessLabel4.style.display = "none";
    }
  }

  seekingInvestmentYes.addEventListener('change', showOrHideNewQuestions);
  seekingInvestmentNo.addEventListener('change', showOrHideNewQuestions);
  numCofoundersInput.addEventListener('change', showOrHideNewQuestions);

function triggerCheckboxEvents() {
  seekingInvestmentYes.dispatchEvent(new Event('change'));
  seekingInvestmentNo.dispatchEvent(new Event('change'));
}

  // Initial setup
  showAdditionalInputs(parseInt(numCofoundersInput.value));
  updateEquitySplits();
});
