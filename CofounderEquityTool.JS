console.log("Script loaded");
document.addEventListener("DOMContentLoaded", function() {
  var numCofoundersInput = document.getElementById('NumCofounders');
  var seekingInvestmentYes = document.getElementById('SeekingInvestmentRadioYes');
  var seekingInvestmentNo = document.getElementById('SeekingInvestmentRadioNo');
  var pitchingQuestion = document.getElementById('PitchingQuestion');
  var capitalAccessQuestion = document.getElementById('CapitalAccessQuestion');

  var cofounderInputs = [
    {
      nameInput: document.getElementById('Cofounder1-Name'),
      ceoLabel: document.getElementById('CEOCofounder1Label'),
      ideaLabel: document.getElementById('IdeaLabelCofounder1'),
      pitchingLabel: document.getElementById('PitchingLabel1'),
      capitalAccessLabel: document.getElementById('CapitalAccessLabel1'),
      ceoInput: document.getElementById('CEOCofounder1'),
      ideaInput: document.getElementById('IdeaBoxCofounder1'),
      pitchingInput: document.getElementById('PitchingBox1'),
      capitalAccessInput: document.getElementById('CapitalAccessBox1')
    },
    {
      nameInput: document.getElementById('Cofounder2-Name'),
      ceoLabel: document.getElementById('CEOCofounder2Label'),
      ideaLabel: document.getElementById('IdeaLabelCofounder2'),
      pitchingLabel: document.getElementById('PitchingLabel2'),
      capitalAccessLabel: document.getElementById('CapitalAccessLabel2'),
      ceoInput: document.getElementById('CEOCofounder2'),
      ideaInput: document.getElementById('IdeaBoxCofounder2'),
      pitchingInput: document.getElementById('PitchingBox2'),
      capitalAccessInput: document.getElementById('CapitalAccessBox2')
    },
    {
      nameInput: document.getElementById('Cofounder3-Name'),
      ceoLabel: document.getElementById('CEOCofounder3Label'),
      ideaLabel: document.getElementById('IdeaLabelCofounder3'),
      pitchingLabel: document.getElementById('PitchingLabel3'),
      capitalAccessLabel: document.getElementById('CapitalAccessLabel3'),
      ceoInput: document.getElementById('CEOCofounder3'),
      ideaInput: document.getElementById('IdeaBoxCofounder3'),
      pitchingInput: document.getElementById('PitchingBox3'),
      capitalAccessInput: document.getElementById('CapitalAccessBox3')
    },
    {
      nameInput: document.getElementById('Cofounder4-Name'),
      ceoLabel: document.getElementById('CEOCofounder4Label'),
      ideaLabel: document.getElementById('IdeaLabelCofounder4'),
      pitchingLabel: document.getElementById('PitchingLabel4'),
      capitalAccessLabel: document.getElementById('CapitalAccessLabel4'),
      ceoInput: document.getElementById('CEOCofounder4'),
      ideaInput: document.getElementById('IdeaBoxCofounder4'),
      pitchingInput: document.getElementById('PitchingBox4'),
      capitalAccessInput: document.getElementById('CapitalAccessBox4')
    }
  ];

  function hideAllAdditionalInputs() {
    for (var i = 2; i < cofounderInputs.length; i++) {
      var cofounderInput = cofounderInputs[i];
      cofounderInput.nameInput.style.display = 'none';
      cofounderInput.ceoLabel.style.display = 'none';
      cofounderInput.ideaLabel.style.display = 'none';
      cofounderInput.pitchingLabel.style.display = 'none';
      cofounderInput.capitalAccessLabel.style.display = 'none';
      cofounderInput.ceoInput.style.display = 'none';
      cofounderInput.ideaInput.style.display = 'none';
      cofounderInput.pitchingInput.style.display = 'none';
      cofounderInput.capitalAccessInput.style.display = 'none';
    }
  }

  function showAdditionalInputs(numCofounders) {
    hideAllAdditionalInputs();
    for (var i = 0; i < numCofounders; i++) {
      var cofounderInput = cofounderInputs[i];
      cofounderInput.nameInput.style.display = 'block';
      cofounderInput.ceoLabel.style.display = 'block';
      cofounderInput.ideaLabel.style.display = 'block';
      cofounderInput.ceoInput.style.display = 'block';
      cofounderInput.ideaInput.style.display = 'block';
      cofounderInput.pitchingInput.style.display = 'block';
      cofounderInput.capitalAccessInput.style.display = 'block';
    }
  }

  function updatePitchingAndCapitalAccess() {
    var numCofounders = parseInt(numCofoundersInput.value);
    var seekingInvestment = seekingInvestmentYes.checked;

    pitchingQuestion.style.display = (numCofounders > 0 && seekingInvestment) ? 'block' : 'none';
    capitalAccessQuestion.style.display = (numCofounders > 0 && seekingInvestment) ? 'block' : 'none';

    for (var i = 0; i < cofounderInputs.length; i++) {
      var cofounderInput = cofounderInputs[i];
      cofounderInput.pitchingLabel.style.display = (i < numCofounders && seekingInvestment) ? 'block' : 'none';
      cofounderInput.capitalAccessLabel.style.display = (i < numCofounders && seekingInvestment) ? 'block' : 'none';
      cofounderInput.pitchingInput.style.display = (i < numCofounders && seekingInvestment) ? 'block' : 'none';
      cofounderInput.capitalAccessInput.style.display = (i < numCofounders && seekingInvestment) ? 'block' : 'none';
    }
  }

  var prevState = {
    numCofounders: 1,
    seekingInvestment: false
  };

  numCofoundersInput.addEventListener('change', function() {
    showAdditionalInputs(parseInt(this.value));
    updatePitchingAndCapitalAccess();
    updateEquitySplits();
  });

  seekingInvestmentYes.addEventListener('change', function() {
    updatePitchingAndCapitalAccess();
    updateEquitySplits();
  });

  seekingInvestmentNo.addEventListener('change', function() {
    updatePitchingAndCapitalAccess();
    updateEquitySplits();
  });

  function updateEquitySplits() {
    var totalPoints = points.reduce((a, b) => a + b, 0);
    var equitySplits = points.map((point) => ((point / totalPoints) * 100).toFixed(2));

    var cofounderNames = [
      cofounderInputs[0].nameInput.value || 'Cofounder 1',
      cofounderInputs[1].nameInput.value || 'Cofounder 2',
      cofounderInputs[2].nameInput.value || 'Cofounder 3',
      cofounderInputs[3].nameInput.value || 'Cofounder 4'
    ];

    document.getElementById('equityCofounder1').textContent = cofounderNames[0] + ': ' + equitySplits[0] + '%';
    document.getElementById('equityCofounder2').textContent = cofounderNames[1] + ': ' + equitySplits[1] + '%';
    if (cofounderInputs[2].nameInput.style.display !== 'none') {
      document.getElementById('equityCofounder3').textContent = cofounderNames[2] + ': ' + equitySplits[2] + '%';
    } else {
      document.getElementById('equityCofounder3').textContent = '';
    }
    if (cofounderInputs[3].nameInput.style.display !== 'none') {
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
          var wasChecked = prevState[inputIDPrefix][index];
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


  function showOrHidePitchingAndCapitalAccess() {
    var numCofounders = parseInt(numCofoundersInput.value);
    var seekingInvestment = seekingInvestmentYes.checked;

    pitchingQuestion.style.display = (numCofounders > 0 && seekingInvestment) ? 'block' : 'none';
    capitalAccessQuestion.style.display = (numCofounders > 0 && seekingInvestment) ? 'block' : 'none';

    for (var i = 0; i < cofounderInputs.length; i++) {
      var cofounderInput = cofounderInputs[i];
      cofounderInput.pitchingLabel.style.display = (i < numCofounders && seekingInvestment) ? 'block' : 'none';
      cofounderInput.capitalAccessLabel.style.display = (i < numCofounders && seekingInvestment) ? 'block' : 'none';
      cofounderInput.pitchingInput.style.display = (i < numCofounders && seekingInvestment) ? 'block' : 'none';
      cofounderInput.capitalAccessInput.style.display = (i < numCofounders && seekingInvestment) ? 'block' : 'none';
    }
  }

  // Trigger the initial display
  showOrHidePitchingAndCapitalAccess();

  // Event listeners
  seekingInvestmentYes.addEventListener('change', showOrHidePitchingAndCapitalAccess);
  seekingInvestmentNo.addEventListener('change', showOrHidePitchingAndCapitalAccess);
  numCofoundersInput.addEventListener('change', showOrHidePitchingAndCapitalAccess);

  // Trigger the initial display
  showAdditionalInputs(parseInt(numCofoundersInput.value));
  updateEquitySplits();
});
