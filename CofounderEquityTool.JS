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

  var capitalAccessInput1 = document.getElementById('CapitalAccessBox1');
  var capitalAccessInput2 = document.getElementById('CapitalAccessBox2');
  var capitalAccessInput3 = document.getElementById('CapitalAccessBox3');
  var capitalAccessInput4 = document.getElementById('CapitalAccessBox4');

  var cofounderCount = 2;

  var cofounder3Fields = [cofounder3NameInput, ceoInput3, ideaInput3, ideasGuyInput3, industryExpertiseInput3, startupExperienceInput3];
  var cofounder4Fields = [cofounder4NameInput, ceoInput4, ideaInput4, ideasGuyInput4, industryExpertiseInput4, startupExperienceInput4];

  function showField(field) {
    field.style.display = 'block';
  }

  function hideField(field) {
    field.style.display = 'none';
  }

  function showCofounderFields(cofounderFields) {
    cofounderFields.forEach(function(field) {
      showField(field);
    });
  }

  function hideCofounderFields(cofounderFields) {
    cofounderFields.forEach(function(field) {
      hideField(field);
    });
  }

  function toggleCofounderFields(cofounderCount) {
    if (cofounderCount >= 3) {
      showCofounderFields(cofounder3Fields);
    } else {
      hideCofounderFields(cofounder3Fields);
    }

    if (cofounderCount >= 4) {
      showCofounderFields(cofounder4Fields);
    } else {
      hideCofounderFields(cofounder4Fields);
    }
  }

  function updateCofounderCount(count) {
    cofounderCount = count;
    toggleCofounderFields(cofounderCount);
  }

  function updateCofounderLabels() {
    ceoLabel1.innerHTML = 'CEO/Co-founder 1';
    ceoLabel2.innerHTML = 'CEO/Co-founder 2';
    ideaLabel1.innerHTML = 'Idea 1';
    ideaLabel2.innerHTML = 'Idea 2';
    ideasGuyLabel1.innerHTML = 'The Ideas Guy 1';
    ideasGuyLabel2.innerHTML = 'The Ideas Guy 2';
    industryExpertiseLabel1.innerHTML = 'Industry Expertise 1';
    industryExpertiseLabel2.innerHTML = 'Industry Expertise 2';
    startupExperienceLabel1.innerHTML = 'Startup Experience 1';
    startupExperienceLabel2.innerHTML = 'Startup Experience 2';

    if (cofounderCount >= 3) {
      ceoLabel3.innerHTML = 'CEO/Co-founder 3';
      ideaLabel3.innerHTML = 'Idea 3';
      ideasGuyLabel3.innerHTML = 'The Ideas Guy 3';
      industryExpertiseLabel3.innerHTML = 'Industry Expertise 3';
      startupExperienceLabel3.innerHTML = 'Startup Experience 3';
    } else {
      ceoLabel3.innerHTML = '';
      ideaLabel3.innerHTML = '';
      ideasGuyLabel3.innerHTML = '';
      industryExpertiseLabel3.innerHTML = '';
      startupExperienceLabel3.innerHTML = '';
    }

    if (cofounderCount >= 4) {
      ceoLabel4.innerHTML = 'CEO/Co-founder 4';
      ideaLabel4.innerHTML = 'Idea 4';
      ideasGuyLabel4.innerHTML = 'The Ideas Guy 4';
      industryExpertiseLabel4.innerHTML = 'Industry Expertise 4';
      startupExperienceLabel4.innerHTML = 'Startup Experience 4';
    } else {
      ceoLabel4.innerHTML = '';
      ideaLabel4.innerHTML = '';
      ideasGuyLabel4.innerHTML = '';
      industryExpertiseLabel4.innerHTML = '';
      startupExperienceLabel4.innerHTML = '';
    }
  }

  function updatePointsForInput(inputId, points) {
    var input = document.getElementById(inputId);
    var inputPoints = document.getElementById(inputId + 'Points');

    if (input.checked) {
      inputPoints.innerHTML = points;
    } else {
      inputPoints.innerHTML = '0';
    }

    updateTotalPoints();
  }

  function updateTotalPoints() {
    var totalPoints = 0;

    // Calculate total points based on inputs
    totalPoints += parseInt(document.getElementById('CEOCofounder1Points').innerHTML);
    totalPoints += parseInt(document.getElementById('CEOCofounder2Points').innerHTML);
    totalPoints += parseInt(document.getElementById('IdeaBoxCofounder1Points').innerHTML);
    totalPoints += parseInt(document.getElementById('IdeaBoxCofounder2Points').innerHTML);
    totalPoints += parseInt(document.getElementById('IdeasGuyBox1Points').innerHTML);
    totalPoints += parseInt(document.getElementById('IdeasGuyBox2Points').innerHTML);
    totalPoints += parseInt(document.getElementById('IndustryExpertiseBox1Points').innerHTML);
    totalPoints += parseInt(document.getElementById('IndustryExpertiseBox2Points').innerHTML);
    totalPoints += parseInt(document.getElementById('StartupExperienceBox1Points').innerHTML);
    totalPoints += parseInt(document.getElementById('StartupExperienceBox2Points').innerHTML);

    if (cofounderCount >= 3) {
      totalPoints += parseInt(document.getElementById('CEOCofounder3Points').innerHTML);
      totalPoints += parseInt(document.getElementById('IdeaBoxCofounder3Points').innerHTML);
      totalPoints += parseInt(document.getElementById('IdeasGuyBox3Points').innerHTML);
      totalPoints += parseInt(document.getElementById('IndustryExpertiseBox3Points').innerHTML);
      totalPoints += parseInt(document.getElementById('StartupExperienceBox3Points').innerHTML);
    }

    if (cofounderCount >= 4) {
      totalPoints += parseInt(document.getElementById('CEOCofounder4Points').innerHTML);
      totalPoints += parseInt(document.getElementById('IdeaBoxCofounder4Points').innerHTML);
      totalPoints += parseInt(document.getElementById('IdeasGuyBox4Points').innerHTML);
      totalPoints += parseInt(document.getElementById('IndustryExpertiseBox4Points').innerHTML);
      totalPoints += parseInt(document.getElementById('StartupExperienceBox4Points').innerHTML);
    }

    // Display total points
    document.getElementById('TotalPoints').innerHTML = totalPoints;
  }

  // Event listeners

  cofounder1NameInput.addEventListener('input', function() {
    ceoLabel1.innerHTML = 'CEO/Co-founder 1 - ' + cofounder1NameInput.value;
  });

  cofounder2NameInput.addEventListener('input', function() {
    ceoLabel2.innerHTML = 'CEO/Co-founder 2 - ' + cofounder2NameInput.value;
  });

  cofounder3NameInput.addEventListener('input', function() {
    ceoLabel3.innerHTML = 'CEO/Co-founder 3 - ' + cofounder3NameInput.value;
  });

  cofounder4NameInput.addEventListener('input', function() {
    ceoLabel4.innerHTML = 'CEO/Co-founder 4 - ' + cofounder4NameInput.value;
  });

  seekingInvestmentYes.addEventListener('change', function() {
    if (seekingInvestmentYes.checked) {
      capitalAccessInput1.disabled = false;
      capitalAccessInput2.disabled = false;
      capitalAccessInput3.disabled = false;
      capitalAccessInput4.disabled = false;
    }
  });

  seekingInvestmentNo.addEventListener('change', function() {
    if (seekingInvestmentNo.checked) {
      capitalAccessInput1.disabled = true;
      capitalAccessInput2.disabled = true;
      capitalAccessInput3.disabled = true;
      capitalAccessInput4.disabled = true;
    }
  });

  ceoInput1.addEventListener('change', function() {
    updatePointsForInput('CEOCofounder1', 5);
  });

  ceoInput2.addEventListener('change', function() {
    updatePointsForInput('CEOCofounder2', 5);
  });

  ceoInput3.addEventListener('change', function() {
    updatePointsForInput('CEOCofounder3', 5);
  });

  ceoInput4.addEventListener('change', function() {
    updatePointsForInput('CEOCofounder4', 5);
  });

  ideaInput1.addEventListener('change', function() {
    updatePointsForInput('IdeaBoxCofounder1', 5);
  });

  ideaInput2.addEventListener('change', function() {
    updatePointsForInput('IdeaBoxCofounder2', 5);
  });

  ideaInput3.addEventListener('change', function() {
    updatePointsForInput('IdeaBoxCofounder3', 5);
  });

  ideaInput4.addEventListener('change', function() {
    updatePointsForInput('IdeaBoxCofounder4', 5);
  });

  ideasGuyInput1.addEventListener('change', function() {
    updatePointsForInput('IdeasGuyBox1', 3);
  });

  ideasGuyInput2.addEventListener('change', function() {
    updatePointsForInput('IdeasGuyBox2', 3);
  });

  ideasGuyInput3.addEventListener('change', function() {
    updatePointsForInput('IdeasGuyBox3', 3);
  });

  ideasGuyInput4.addEventListener('change', function() {
    updatePointsForInput('IdeasGuyBox4', 3);
  });

  industryExpertiseInput1.addEventListener('change', function() {
    updatePointsForInput('IndustryExpertiseBox1', 5);
  });

  industryExpertiseInput2.addEventListener('change', function() {
    updatePointsForInput('IndustryExpertiseBox2', 5);
  });

  industryExpertiseInput3.addEventListener('change', function() {
    updatePointsForInput('IndustryExpertiseBox3', 5);
  });

  industryExpertiseInput4.addEventListener('change', function() {
    updatePointsForInput('IndustryExpertiseBox4', 5);
  });

  startupExperienceInput1.addEventListener('change', function() {
    updatePointsForInput('StartupExperienceBox1', 5);
  });

  startupExperienceInput2.addEventListener('change', function() {
    updatePointsForInput('StartupExperienceBox2', 5);
  });

  startupExperienceInput3.addEventListener('change', function() {
    updatePointsForInput('StartupExperienceBox3', 5);
  });

  startupExperienceInput4.addEventListener('change', function() {
    updatePointsForInput('StartupExperienceBox4', 5);
  });

  capitalAccessInput1.addEventListener('change', function() {
    updatePointsForInput('CapitalAccessBox1', 10);
  });

  capitalAccessInput2.addEventListener('change', function() {
    updatePointsForInput('CapitalAccessBox2', 10);
  });

  capitalAccessInput3.addEventListener('change', function() {
    updatePointsForInput('CapitalAccessBox3', 10);
  });

  capitalAccessInput4.addEventListener('change', function() {
    updatePointsForInput('CapitalAccessBox4', 10);
  });

  // Initialize the form
  updateCofounderCount(2);
  updateCofounderLabels();
});
