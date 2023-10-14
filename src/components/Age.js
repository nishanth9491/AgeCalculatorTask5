import {Component} from "react";


export class Age extends Component{
    constructor()
    {
        super();
        this.state={age:0}

    }

   handleAge=(e)=>{
    let dob=document.getElementById("dob").value;
    console.log(dob);
    if(dob=== "")
    {
        alert("Fill Your Date Of Birth again");
        return;
        //as just like java we return for void to get out
    }
    let DobDate=new Date(dob);
    console.log(DobDate)
    let CurrentDate=new Date();
    let age1 = CurrentDate.getFullYear() - DobDate.getFullYear();
    this.setState({age: age1});



   }



    render()
    {
        return(
            <div class="container">
                <div class="row justify-content-center align-items-center mt-5">
                    <div class="col-md-7 text-center">
                        <div class="card">
                            <div class="card-body">
                                <h1 className="fw-bolder">Age Calculator</h1>
                                <p className="fw-bolder">Enter your date of birth</p>
                                <input type="date" id="dob" style={{width:"250px", marginBottom:"10px", padding:"5px"}}></input>
                                <br></br>
                                <button class='border-0 p3 bg-dark text-light p-2 rounded' onClick={this.handleAge}>Calculate Age</button>
                                <h1>you are {this.state.age} years old</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }




}