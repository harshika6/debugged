import React,{Component} from 'react';
import './contact.scss';
import 'tachyons';
import AOS from 'aos';
import FormInput from './FormInput.js';
import CustomButton from './CustomButton.js';
import { FaGithub,FaWhatsapp,FaFacebookF,FaPhoneAlt } from "react-icons/fa";
import { GoMail,GoLocation } from "react-icons/go";
import { AiFillLinkedin,AiFillTwitterCircle } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import insta from './insta.svg';

const initialState = {
	email: '',
	name: '',
  message:''
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  handleSubmit = (event) => {
		event.preventDefault();
		fetch('http://localhost:3000/contact', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				message: this.state.message
			})
		})
		.then(response => response.json())
		.then(resp => {
			if(resp==='Success')
			{
				alert('Your message was recieved successfully.Thank you for your feedback.')
			}
		})
		.catch(err => {
			console.log(err)
			alert('OOPS....something went wrong.Please try again.')
		})
	}

	handleChange = (event) => {
		const {value, name} = event.target;
		this.setState({[name]: value});
	}
  render(){
 AOS.init();
    return (
      <>
			<span id="contactdiv"></span>
      <div className="container"  data-aos="fade-left"  data-aos-offset="200" data-aos-duration='1000'>
      <div className='left'>

      <p className="serv black fw4 mb3 ml2">Contact Us</p>
      <div className="bb bw2 center mt3 divide" ></div>
      <form onSubmit={this.handleSubmit}>
      <FormInput
      label="Name"
      name="name"
      type="text"
      value={this.state.name}
      handleChange={this.handleChange}
      required
      />
      	<FormInput
      	label="Email"
      	name="email"
      	type="email"
      	value={this.state.email}
      	handleChange={this.handleChange}
      	required
      	/>
      	<FormInput
      	label='Message'
      	name="message"
      	type="text"
      	value={this.state.message}
      	handleChange={this.handleChange}
      	required
      	/>
      <CustomButton type="submit">Contact Us</CustomButton>
      </form>
      </div>

			<div className="linkicon">
			<p className="serv black fw4 ml2">Useful Links</p>
			<div className="bb bw2 center mt2 divide"  ></div>

      <div className='left flex justify-start mb5 ml2 iconboss'>
			<div className="mt4 mr5 ml3 icon">
      <div className="links grow mb4"> <a href="https://t.me/debuggedexe" className="a"> <FiSend size="2em" color="#e88f0a" className="mr2 grow"/></a></div>
      <div  className="links  grow mb4 icon"> <a href="#" className="a"><AiFillTwitterCircle size="2em" color="#e88f0a" className="mr2 grow"/></a></div>
			</div>
			<div className="mt4 mr5 ml3 icon">
      <div className="links grow mb4"><a href="https://instagram.com/debugged.exe?igshid=eun6v0gval7m" className="a"><img src={insta} height="30px" width="30px" className="mr2 grow"/></a></div>
      <div className="links grow mb4"> <a href="https://www.linkedin.com/company/debugged-exe" className="a"> <AiFillLinkedin size="2em" color="#e88f0a" className="mr2 grow"/></a></div>
			</div>
			<div className="mt4 ml3 mr5 icon">
			<div className="links grow mb4"><a href="https://www.facebook.com/Debuggedexe-103521081750705/" className="a"><FaFacebookF size="2em" color="#e88f0a" className="mr2 grow"/></a></div>
			<div className="links grow mb4"><a href="https://wa.me/919168894490" className="a"><FaWhatsapp size="2em" color="#e88f0a" className="mr2 grow"/></a></div>
			</div>
      </div>
						<p className="serv black fw4 ml2">Head Office</p>
						<div className="bb bw2 center divide mt3" ></div>
						<div className="links mt2"><a href='mailto:debugged.exe@gmail.com'><GoMail size="2em" color="#e88f0a" className="mr2 "/>debugged.exe@gmail.com</a></div>
						<div className="links"><a href="tel:919168894490" ><FaPhoneAlt size="1.5em" color="#e88f0a" className="mr2 "/>+91 9168894490</a></div>
           	<div className="links mt2"> <GoLocation size="2em" color="#e88f0a" className="mr2 "/>Pune,Maharashtra</div>
      </div>
      </div>
      <footer className="footer mt6">developed by debugged.exe</footer>
      <footer  className="footer">websites | mobile applications | digital marketing</footer>

</>
    );
  }
}

export default Contact;
