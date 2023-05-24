console.log("Script loaded");
document.addEventListener("DOMContentLoaded", function() {
  var cofounder1NameInput = document.getElementById('Cofounder1-Name');
  var cofounder2NameInput = document.getElementById('Cofounder2-Name');
  var cofounder3NameInput = document.getElementById('Cofounder3-Name');
  var cofounder4NameInput = document.getElementById('Cofounder4-Name');

  var cofounder3NameLabel = document.getElementById('Cofounder3NameLabel');
  var cofounder4NameLabel = document.getElementById('Cofounder4NameLabel');
  
  // Get the radio buttons
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

// Get the new question fields
var pitchingToInvestorsQuestion = document.getElementById('InvestorsPitchQuestion');
var accessToCapitalQuestion = document.getElementById('CapitalAccessQuestion');

// Get the radio buttons of new questions
var pitchingYes = document.getElementById('PitchingBoxYes');
var pitchingNo = document.getElementById('PitchingBoxNo');
var capitalAccessYes = document.getElementById('CapitalAccessBoxYes');
var capitalAccessNo = document.getElementById('CapitalAccessBoxNo');

  function hideAllAdditionalInputs() {
    var additionalInputs = [cofounder3NameInput, cofounder4NameInput, cofounder3NameLabel, cofounder4NameLabel, ceoLabel3, ceoLabel4, ideaLabel3, ideaLabel4, ceoInput3, ceoInput4, ideaInput3, ideaInput4, ideasGuyInput3, ideasGuyInput4, ideasGuyLabel3, ideasGuyLabel4, industryExpertiseInput3, industryExpertiseInput4, industryExpertiseLabel3, industryExpertiseLabel4, startupExperienceInput3, startupExperienceInput4, startupExperienceLabel3, startupExperienceLabel4];
    additionalInputs.forEach(function(input) {
      input.style.display = "none";
    });
  }

function showAdditionalInputs(numCofounders) {
  hideAllAdditionalInputs();
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
    PitchingBox3.style.display = "block";
    PitchingLabel3.style.display = "block";
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
    startupExperienceInput4.style.display = "block";
    startupExperienceLabel4.style.display = "block";
    PitchingBox4.style.display = "block";
    PitchingLabel4.style.display = "block";
  }

  var isSeekingInvestmentYes = seekingInvestmentYes.checked;

  if (numCofounders >= 3 && isSeekingInvestmentYes) {
    CapitalAccessBox3.style.display = "block";
    CapitalAccessLabel3.style.display = "block";
  }

  if (numCofounders == 4 && isSeekingInvestmentYes) {
    CapitalAccessBox4.style.display = "block";
    CapitalAccessLabel4.style.display = "block";
  }
}


  var isSeekingInvestmentYes = seekingInvestmentYes.checked;

  if (numCofounders >= 3 && isSeekingInvestmentYes) {
    CapitalAccessBox3.style.display = "block";
    CapitalAccessLabel3.style.display = "block";
  }

  if (numCofounders == 4 && isSeekingInvestmentYes) {
    CapitalAccessBox4.style.display = "block";
    CapitalAccessLabel4.style.display = "block";
  }
}

  var cofounderInputs = document.getElementsByName('numCofounders');
  for(var i = 0; i < cofounderInputs.length; i++) {
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
  });

  cofounder2NameInput.addEventListener('input', function() {
    ceoLabel2.textContent = this.value;
    ideaLabel2.textContent = this.value;
    ideasGuyLabel2.textContent = this.value;
    industryExpertiseLabel2.textContent = this.value;
    startupExperienceLabel2.textContent = this.value;
  });

  cofounder3NameInput.addEventListener('input', function() {
    ceoLabel3.textContent = this.value;
    ideaLabel3.textContent = this.value;
    ideasGuyLabel3.textContent = this.value;
    industryExpertiseLabel3.textContent = this.value;
    startupExperienceLabel3.textContent = this.value;
  });

  cofounder4NameInput.addEventListener('input', function() {
    ceoLabel4.textContent = this.value;
    ideaLabel4.textContent = this.value;
    ideasGuyLabel4.textContent = this.value;
    industryExpertiseLabel4.textContent = this.value;
    startupExperienceLabel4.textContent = this.value;
  });

  var points = [0, 0, 0, 0]; 


// Function to show or hide new questions
function showOrHideNewQuestions() {
  if (seekingInvestmentYes.checked) {
    pitchingToInvestorsQuestion.style.display = "block";
    accessToCapitalQuestion.style.display = "block";
  } else {
    pitchingToInvestorsQuestion.style.display = "none";
    accessToCapitalQuestion.style.display = "none";
    // Reset radio buttons for hidden questions
    pitchingYes.checked = false;
    pitchingNo.checked = false;
    capitalAccessYes.checked = false;
    capitalAccessNo.checked = false;
  }
}

// Event listeners for the 'Seeking Investment' radio buttons
seekingInvestmentYes.addEventListener('change', showOrHideNewQuestions);
seekingInvestmentNo.addEventListener('change', showOrHideNewQuestions);

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

// stores the previous state of each checkbox
var prevState = {
  'CEOCofounder': [false, false, false, false],
  'IdeaBoxCofounder': [false, false, false, false],
  'IdeasGuyBox': [false, false, false, false],
  'IndustryExpertiseBox': [false, false, false, false],
  'StartupExperienceBox': [false, false, false, false]
};


function updatePointsForInput(inputIDPrefix, pointValue) {
  for (var i = 0; i < 4; i++) {
    var input = document.getElementById(inputIDPrefix + (i + 1));
    if (input) {
      input.addEventListener('change', function() {
        // get index of the changed checkbox
        var index = this.id.charAt(this.id.length - 1) - 1;
        // get the previous state of the checkbox
        var wasChecked = prevState[inputIDPrefix.charAt(0).toUpperCase() + inputIDPrefix.slice(1)][index];
        if (wasChecked && !this.checked) {
          // if checkbox was previously checked and is now unchecked, subtract the points
          points[index] -= pointValue;
        } else if (!wasChecked && this.checked) {
          // if checkbox was previously unchecked and is now checked, add the points
          points[index] += pointValue;
        }
        // save the current state of the checkbox
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
});
