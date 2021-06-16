import React, {useState} from 'react'

import './App.css';

import Header from './components/Header';

import SubHeader from './components/SubHeader';

import Footer from './components/Footer';

import ResultPanel from './components/ResultPanel';

import CircularProgress from '@material-ui/core/CircularProgress';

function App() {

    const [noOfBanana, setNoOfBanana] = useState(3000)

    const [noOfCamel, setNoOfCamel] = useState(1)

    const [eatingRate, setEatingRate] = useState(1)

    const [distance, setDistance] = useState(1000)

    const [result , setResult] = useState(null)

    const [error, setError] = useState(null)

    const [loading, setLoading] = useState(false)

    const handleFormSubmission = () => {

        setLoading(true)

        if(!noOfBanana || !noOfCamel || !eatingRate || !distance){

            setError("**Kindly ensure that all fields are filled properly**")
              
            setTimeout(()=> {

                setError(null)

                setLoading(false)
            
            }, 5000)

            return 

        }

        const response = calculateNoOfBananasLeft()

        setResult(response)

        setLoading(false)

    }

    const calculateNoOfBananasLeft = () => {

        const condition = noOfBanana / (1000 * noOfCamel)
    
        let total = 0
        
        for(let i = 0; i <= condition ; i++) {
            
            total = total + (1000 / ((2 * i)  - 1))

        }
        
        let value = (total + ( (noOfBanana % 1000) / ((2 * condition) + 1)))/ eatingRate
                
        const response = value * noOfCamel
        
        const answer = distance - response
        
        const remainingBanana = distance - answer

        if(remainingBanana < 0) return 0
        
        return Math.floor(remainingBanana)

    }

    const clearResult = () => {

        setResult(null)

    }

  return (

      <div id="page">

          <Header />

          <SubHeader />

          <main>

            <div class="order">

              <div class="container">

                <form id="orderForm" name="orderForm" >

                  {

                    error && <p style={{color: 'red'}}>{error}</p>
                    
                  }

                  <div class="row">

                    <div class="col-lg-8" id="mainContent">

                      <div id="personalDetails" class="row contact-box">

                        <div class="contact-box-header">

                          <h3>Farm Output Calculator</h3>

                          <p>Kindly provide correct details below</p>

                        </div>

                        <div class="col-md-6 col-sm-6">

                          <div class="form-group">

                            <label for="Number of Bananas">Number of Bananas</label>

                            <input value={noOfBanana} onChange={(e) => setNoOfBanana(parseInt(e.target.value))} id="userName" class="form-control" name="noOfBanana" step="1" type="number" pattern="\d+" required />

                          </div>

                        </div>

                        <div class="col-md-6 col-sm-6">

                          <div class="form-group">

                            <label for="Number of Camels">Number of Camels</label>

                            <input value={noOfCamel} onChange={(e) => setNoOfCamel(parseInt(e.target.value))} id="email" class="form-control" name="noOfCamel" type="number" step="1" pattern="\d+" required />

                          </div>

                        </div>

                        <div class="col-md-6 col-sm-6">

                          <div class="form-group">

                            <label for="Eating Rate">Camel Eating Rate</label>

                            <input value={eatingRate} onChange={(e) => setEatingRate(parseInt(e.target.value))} id="phone" class="form-control" name="rate" type="number" step="1" pattern="\d+" required />

                          </div>

                        </div>

                        <div class="col-md-6 col-sm-6">

                          <div class="form-group">

                            <label for="Diatance to market">Distance to the market</label>

                            <input value={distance} onChange={(e) => setDistance(parseInt(e.target.value))} id="address" class="form-control" name="distance" type="number" step="1" pattern="\d+" required />
                          
                          </div>

                        </div>

                        <div class="col-lg-12 mt-3">

                          <button disabled={loading} onClick={handleFormSubmission} type="button" class="btn-form-func">

                          <span> { loading ? <CircularProgress size={20} style={{color: "white"}}/> : "Submit"}</span>


                          </button>

                        </div>

                      </div>

                    </div>

                    <ResultPanel clearResult={clearResult} result={result}/>

                  </div>

                </form>

              </div>

            </div>

          </main>

        <Footer />

      </div>

  );
}

export default App;
