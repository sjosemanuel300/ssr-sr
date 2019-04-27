import React from 'react';
import {
    Card, CardFooter, TabContent, TabPane, Button
} from 'reactstrap';


class ReactBootstrapWizard extends React.Component{
    constructor(props){
        super(props);
        /*var width;
        if(this.props.steps.length === 1){
            width = '100%';
        } else {
            if(window.innerWidth < 600){
                if(this.props.steps.length !== 3){
                    width = '50%';
                } else {
                    width = 100/3 + '%';
                }
            } else {
                if(this.props.steps.length === 2){
                    width = '50%';
                } else {
                    width = 100/3 + '%';
                }
            }
        }*/
        this.state = {
            currentStep: 0,
            color: this.props.color !== undefined ? this.props.color:"primary",
            nextButton: (this.props.steps.length > 1 ? true:false),
            previousButton: false,
            finishButton: (this.props.steps.length === 1 ? true:false),
            /*width: width,
            movingTabStyle: {
                transition: 'transform 0s'
            }*/
        };
        this.navigationStepChange = this.navigationStepChange.bind(this);
        /*this.refreshAnimation = this.refreshAnimation.bind(this);*/
        this.previousButtonClick = this.previousButtonClick.bind(this);
        this.previousButtonClick = this.previousButtonClick.bind(this);
        this.finishButtonClick = this.finishButtonClick.bind(this);
    }

    navigationStepChange(key){
        // if(this.props.navSteps){
        //     var validationState = true;
        //     if(key > this.state.currentStep){
        //         for(var i = this.state.currentStep ; i < key ; i++){
        //             if( CompanyFields.isValidated !== undefined &&
        //                 CompanyFields.isValidated() === false){
        //                 validationState = false;
        //                 break;
        //             }
        //         }
        //     }
        //     if(validationState){
        //         this.setState({
        //             currentStep: key,
        //             nextButton: (this.props.steps.length > key + 1 ? true:false),
        //             previousButton: (key > 0 ? true:false),
        //             finishButton: (this.props.steps.length === key + 1 ? true:false)
        //         });
        //         /*this.refreshAnimation(key);*/
        //     }
        // }
    }

    nextButtonClick(){
        // if(
        //     (this.props.validate &&
        //     ((CompanyFields.isValidated !== undefined &&
        //     CompanyFields.isValidated()) ||
        //     CompanyFields.isValidated === undefined)) || this.props.validate === undefined){
        //         var key = this.state.currentStep + 1;
        //         this.setState({
        //             currentStep: key,
        //             nextButton: (this.props.steps.length > key + 1 ? true:false),
        //             previousButton: (key > 0 ? true:false),
        //             finishButton: (this.props.steps.length === key + 1 ? true:false)
        //         });
        //        /* this.refreshAnimation(key);*/
        // }
    }

    previousButtonClick(){
        // var key = this.state.currentStep - 1;
        // if( key >= 0 ){
        //     this.setState({
        //         currentStep: key,
        //         nextButton: (this.props.steps.length > key + 1 ? true:false),
        //         previousButton: (key > 0 ? true:false),
        //         finishButton: (this.props.steps.length === key + 1 ? true:false)
        //     });
        //     /*this.refreshAnimation(key);*/
        // }
    }

    finishButtonClick(){
        // if(
        //     this.props.validate &&
        //     ((CompanyFields.isValidated !== undefined &&
        //     CompanyFields.isValidated()) ||
        //     CompanyFields.isValidated === undefined) &&
        //     this.props.finishButtonClick !== undefined){
        //             this.props.finishButtonClick();
        // }
    }
    /*
        YOU NEED TO PASS HOW TO RENDER TabPane COMPONENT'S ON EVERY STEP (boostrap components I mean...), SO UNRELATED STEP'S CSS COULD BE USED WITH THIS COMPONENT TO MAKE IT REUSABLE
    */
    render(){
        return(
            <div className="wizard-container" ref="wizard">
                <Card className="card card-wizard active">
                    {this.props.title !== undefined ? this.props.title : null}
            		{this.props.subtitle !== undefined ? this.props.subtitle : null}
                    {/*
                    	<div className="wizard-navigation">
                            <Nav pills>
                                {
                                    this.props.steps.map((prop,key) => {
                                        return (
                                            <NavItem key={key} style={{width: this.state.width}}>
                                                <NavLink
                                                    className={key === this.state.currentStep ? "active":""}
                                                    onClick={() => this.navigationStepChange(key)}
                                                >
                                                    {prop.stepName}
                                                </NavLink>
                                            </NavItem>
                                        )
                                    })
                                }
                            </Nav>
                            <div className="moving-tab" style={this.state.movingTabStyle}>{this.props.steps[this.state.currentStep].stepName}</div>
                        </div>
                    */}
                    <TabContent activeTab={this.state.currentStep}>
                        {
                            this.props.steps.map((prop,key) => {
                                return (
                                    <TabPane tabId={key} key={key} className={this.state.currentStep === key ? "fade show step-body":"fade"}>
                                        {
                                            typeof prop.component === 'function' ? (
                                                <prop.component ref={prop.stepName}/>
                                            ):(
                                                <div ref={prop.stepName}>
                                                    {prop.component}
                                                </div>
                                            )
                                        }
                                    </TabPane>
                                );
                            })
                        }
                    </TabContent>
                    <CardFooter className="footer-register">
                        <div style={{float: "right"}}>
                            {this.state.nextButton ? (<Button className={"btn-next" + (this.props.nextButtonClasses !== undefined ? (" "+this.props.nextButtonClasses):"")} onClick={() => this.nextButtonClick()}>{this.props.nextButtonText !== undefined ? this.props.nextButtonText:"Next"}</Button>):null}
                            {this.state.finishButton ? (<Button className={"btn-finish" + (this.finishButtonClasses !== undefined ? (" "+this.props.finishButtonClasses):"")} onClick={() => this.finishButtonClick()}>{this.props.finishButtonText !== undefined ? this.props.finishButtonText:"Finish"}</Button>):null}
                        </div>
                        <div style={{float: "left"}}>
                            {this.state.previousButton ? (<Button className={"btn-previous" + (this.props.previousButtonClasses !== undefined ? (" "+this.props.previousButtonClasses):"")} onClick={() => this.previousButtonClick()}>{this.props.previousButtonText !== undefined ? this.props.previousButtonText:"Previous"}</Button>):null}
                        </div>
                        <div className="clearfix">

                        </div>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default ReactBootstrapWizard;
