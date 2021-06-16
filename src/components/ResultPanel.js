import React from 'react'

const ResultPanel = ({result, clearResult}) => {

    return (
        
        <div class="col-lg-4" id="sidebar">

            <div id="orderContainer" class="theiaStickySidebar">

                <div class="row">

                    <div class="col-md-12">
                        {
                            result ?
                            <>
                                <h3>Result</h3>

                                <div class="total-container">

                                    <h1 class="text-center"> {result} </h1>

                                    <h4 class="text-center">Bananas will get to the market</h4>

                                </div>

                            </>
                            :
                            
                            <h3>No Result Yet</h3>

                        }


                    </div>

                </div>
                {
                     result &&
                     <div class="row mt-3">

                        <div class="col-lg-12">

                            <button onClick={clearResult} type="button" name="reset" id="resetBtn" class="btn-form-func btn-form-func-alt-color">

                                <span class="btn-form-func-content">RESET</span>

                                <span class="icon"><i class="fa fa-times" aria-hidden="true"></i></span>

                            </button>

                        </div>

                     </div>
                }

            </div>

        </div>
    
    )
}

export default ResultPanel
