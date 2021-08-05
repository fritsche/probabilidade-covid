
function bayesCovidProbability(test_result, prevalence, specificity, sensitivity) {
  if (test_result)
    return (sensitivity * prevalence) / (sensitivity * prevalence + (1 - specificity) * (1 - prevalence))
  return ((1 - sensitivity) * prevalence) / (((1 - sensitivity) * prevalence) + specificity * (1 - prevalence))
}

function computeCovidProbability(e) {
    e.preventDefault()
    let tests = document.getElementById('testResultInput').value.split(',')
    let prevalence = parseFloat(document.getElementById('prevalenceInput').value) / 100
    let specificity = parseFloat(document.getElementById('specificityInput').value) / 100
    let sensitivity = parseFloat(document.getElementById('sensitivityInput').value) / 100
    console.log(tests, prevalence, specificity, sensitivity)
    for (test of tests) {
        prevalence = bayesCovidProbability(parseInt(test), prevalence, specificity, sensitivity)
        console.log(prevalence)
    }
    document.getElementById('result').innerText = `Probabilidade de ${Math.round(prevalence * 100 * 100) / 100}%`
}

const form = document.getElementById('inputForm')
form.addEventListener('submit', computeCovidProbability)
